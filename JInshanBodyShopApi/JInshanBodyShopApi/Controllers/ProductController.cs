using JInshanBodyShopApi.Models;
using JInshanBodyShopApi.PostModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JInshanBodyShopApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly AppDbContext _context;
    
    public ProductController(AppDbContext dbContext)
    {
        _context = dbContext;
    }

    [HttpGet]
    [Route("/GetProductsByIds")]
    [ProducesResponseType(typeof(List<Product>), 200)]
    public async Task<ActionResult<IEnumerable<Product>>> GetProductsById([FromQuery(Name = "productIds[]")] List<Guid> productIds)
    {
        List<Product> products = new List<Product>(10);
        foreach (Guid id in productIds)
        {
            Console.WriteLine(id);
            Product? product = await _context.Products.FindAsync(id);
            if (product is not null)
            {
                products.Add(product);
            }
        }
        
        return Ok(products);
    }
    
    [HttpGet]
    [Route("/GetProducts")]
    [ProducesResponseType(typeof(ApiGetReturnType<Product>), 200)]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts([FromQuery(Name = "filterByCategories[]")] ProductType[]? filterByCategories = null, bool? filterByWithdrawn = null, ProductShop? shop = null, string? filterByName = null, string orderByColumn = "productid", bool orderAscending = true, int page = 1)
    {
        IQueryable<Product> query = orderAscending ? _context.Products.AsQueryable().OrderBy(Product.GetKeySelector(orderByColumn)) : _context.Products.AsQueryable().OrderByDescending(Product.GetKeySelector(orderByColumn));
        var items = Product.Filter(query, filterByCategories, filterByWithdrawn, shop, filterByName);
        var maxPages = items.Count() / 12 + 1;
        var itemsList = await items.Skip((page - 1) * 12).Take(12).ToListAsync();
        ApiGetReturnType<Product> result = new ApiGetReturnType<Product>
        {
            MaxPages = maxPages,
            Items = itemsList,
        };
        
        return await Task.FromResult(Ok(result));
    }

    [HttpGet]
    [ProducesResponseType(typeof(Product), 200)]
    public async Task<IActionResult> GetProduct(Guid id)
    {
        Product? product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound();
        }
        
        return Ok(product);
    }

    [HttpPost]
    [ProducesResponseType(typeof(Guid), 200)]
    public async Task<IActionResult> CreateProduct(PostProduct product)
    {
        Product newProduct = new Product
        {
            ProductId = Guid.NewGuid(),
            Name = product.Name ?? "",
            Price = product.Price ?? 0,
            Description = product.Description ?? "",
            Weight = product.Weight ?? 0,
            Category = product.Category ?? 0,
            Quantity = product.Quantity ?? 0,
            Withdrawn = false, 
            Shop = product.Shop ?? ProductShop.Jinshan,
        };

        try
        {
            await _context.Products.AddAsync(newProduct);
            await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return Problem();
        }
        
        return Ok(newProduct.ProductId);
    }

    [HttpPut]
    public async Task<IActionResult> UpdateProduct(Guid id, PostProduct product)
    {
        Product?  productToUpdate = await _context.Products.FindAsync(id);
        if (productToUpdate == null)
        {
            return NotFound();
        }
        
        productToUpdate.Name = product.Name ?? productToUpdate.Name;
        productToUpdate.Price = product.Price ?? productToUpdate.Price;
        productToUpdate.Description = product.Description ?? productToUpdate.Description;
        productToUpdate.Weight = product.Weight ?? productToUpdate.Weight;
        productToUpdate.Quantity = product.Quantity ??  productToUpdate.Quantity;
        productToUpdate.Category = product.Category ?? productToUpdate.Category;
        productToUpdate.Withdrawn = product.Withdrawn ??  productToUpdate.Withdrawn;
        productToUpdate.Shop = product.Shop ?? productToUpdate.Shop;
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return Problem();
        }
        
        return Ok();
    }
    
    [HttpDelete]
    public async Task<IActionResult> DeleteProduct(Guid id)
    {
        Product? productToDelete = await _context.Products.FindAsync(id);
        if (productToDelete == null)
        {
            return Ok();
        }
        
        _context.Products.Remove(productToDelete);
        await _context.SaveChangesAsync();
        return Ok();
    }
}