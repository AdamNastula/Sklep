using JInshanBodyShopApi.Models;
using JInshanBodyShopApi.PostModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JInshanBodyShopApi.Controllers;

[ApiController]
[Route("[controller]")]
public class SimilarProductsController : ControllerBase
{
    AppDbContext _context;

    public SimilarProductsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("/GetSimilarProducts")]
    public async Task<IActionResult> GetSimilarProducts(Guid productId)
    {
        List <Product> products = new List<Product>(10);
        var similarProducts = await _context.SimilarProducts.Where(similarProducts => similarProducts.ProductId == productId).ToListAsync();

        foreach (var similarProduct in similarProducts)
        {
            Product? product = await _context.Products.FindAsync(similarProduct.SimilarProductId);
            if (product == null)
            {
                continue;
            }
            
            products.Add(product);
        }
        
        return Ok(products);
    }
    
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] PostSimilarProducts products)
    {
        SimilarProducts similarProducts = new SimilarProducts
        {
            Id = Guid.NewGuid(),
            ProductId = products.ProductId,
            SimilarProductId = products.SimilarProductId,
        };

        try
        {
            await _context.SimilarProducts.AddAsync(similarProducts);
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
    [Route("/DeleteSimilarProducts")]
    public async Task<IActionResult> DeleteProducts(Guid productId, Guid similarProductId)
    {
        var similarProductsList = await _context.SimilarProducts.Where(similarProducts =>
                similarProducts.ProductId == productId && similarProducts.SimilarProductId == similarProductId)
            .ToListAsync();

        foreach (var similarProduct in similarProductsList)
        {
            _context.SimilarProducts.Remove(similarProduct);
        }

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
}