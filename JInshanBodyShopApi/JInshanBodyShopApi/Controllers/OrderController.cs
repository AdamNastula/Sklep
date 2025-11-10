using System.ComponentModel;
using JInshanBodyShopApi.Models;
using JInshanBodyShopApi.PostModels;
using JInshanBodyShopApi.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JInshanBodyShopApi.Controllers;

[ApiController]
[Route("[controller]")]
public class OrderController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly EmailNotifier _emailNotifier;
    
    public OrderController(AppDbContext dbContext, EmailNotifier emailNotifier)
    {
        _context = dbContext;
        _emailNotifier = emailNotifier;
    }

    [HttpGet]
    [Route("/Personal/Products")]
    [ProducesResponseType(typeof(List<Product>), 200)]
    public async Task<IActionResult> GetProductsInOrder(Guid orderId)
    {
        List<ProductsInOrders> products = await _context.ProductsInOrders.Where(p => p.OrderId == orderId).ToListAsync();
        List<Product> productsList = new List<Product>(10);
        foreach (var product in  products)
        {
            Product? productToAdd = await _context.Products.FindAsync(product.ProductId);
            if (productToAdd is null)
            {
                continue;
            }
            
            productToAdd.Quantity = product.Quantity;
            productsList.Add(productToAdd);
        }
        
        return Ok(productsList);
    }
    
    [HttpGet]
    [Route("/Company/Products")]
    [ProducesResponseType(typeof(List<Product>), 200)]
    public async Task<IActionResult> GetProductsInCompanyOrder(Guid orderId)
    {
        List<ProductsInCompanyOrders> products = await _context.ProductsInCompanyOrders.Where(p => p.OrderId == orderId).ToListAsync();
        List<Product> productsList = new List<Product>(10);
        foreach (var product in  products)
        {
            Product? productToAdd = await _context.Products.FindAsync(product.ProductId);
            if (productToAdd is null)
            {
                continue;
            }
            
            productToAdd.Quantity = product.Quantity;
            productsList.Add(productToAdd);
        }
        
        return Ok(productsList);
    }
    
    [HttpGet]
    [Route("/GetOrders/Personal")]
    [ProducesResponseType(typeof(ApiGetReturnType<PersonalOrder>), 200)]
    public async Task<IActionResult> GetPersonalOrders(int page, int pageSize, string orderByColumn, bool orderAscending, [FromQuery] OrderStatus[]? orderByStatus)
    {
        IQueryable<PersonalOrder> query = orderAscending ? _context.PersonalOrders.AsQueryable().OrderBy(PersonalOrder.KeySelector(orderByColumn)) : _context.PersonalOrders.AsQueryable().OrderByDescending(PersonalOrder.KeySelector(orderByColumn));
        ApiGetReturnType<PersonalOrder> result = new ApiGetReturnType<PersonalOrder>
        {
            MaxPages = 1,
            Items = await PersonalOrder.Filter(query, orderByStatus).Skip((page - 1) * pageSize).Take(pageSize).ToListAsync()
        };
            
        return Ok(result);
    }
    
    [HttpGet]
    [Route("/GetOrders/Company")]
    [ProducesResponseType(typeof(ApiGetReturnType<CompanyOrder>), 200)]
    public async Task<IActionResult> GetCompanyOrders(int page, int pageSize, string orderByColumn, bool orderAscending, [FromQuery] OrderStatus[]? orderByStatus)
    {
        IQueryable<CompanyOrder> query = orderAscending ? _context.CompanyOrders.AsQueryable().OrderBy(CompanyOrder.KeySelector(orderByColumn)) : _context.CompanyOrders.AsQueryable().OrderByDescending(CompanyOrder.KeySelector(orderByColumn));
        ApiGetReturnType<CompanyOrder> result = new ApiGetReturnType<CompanyOrder>
        {
            MaxPages = 1,
            Items = await CompanyOrder.Filter(query, orderByStatus).Skip((page - 1) * pageSize).Take(pageSize).ToListAsync()
        };
            
        return Ok(result);
    }

    [HttpGet]
    [Route("/GetOrder/Personal")]
    [ProducesResponseType( typeof(PersonalOrder), 200)]
    public async Task<IActionResult> GetPersonalOrder(Guid id)
    {
        PersonalOrder? order = await _context.PersonalOrders.FindAsync(id);
        if (order == null)
        {
            NotFound();
        }
        
        return Ok(order);
    }
    
    [HttpGet]
    [Route("/GetOrder/Company")]
    [ProducesResponseType( typeof(CompanyOrder), 200)]
    public async Task<IActionResult> GetCompanyOrder(Guid id)
    {
        CompanyOrder? order = await _context.CompanyOrders.FindAsync(id);
        if (order == null)
        {
            NotFound();
        }
        
        return Ok(order);
    }

    [HttpGet]
    [Route("/GetOrder/Company/Status")]
    [ProducesResponseType(typeof(CompanyOrder), 200)]
    public async Task<IActionResult> GetCompanyOrder(Guid id, string email, ulong number)
    {
        CompanyOrder? order = await _context.CompanyOrders.FindAsync(id);
        if (order == null || order.Number != number || order.Email != email)
        {
            return NotFound();
        }

        return Ok(order);
    }
    
    [HttpGet]
    [Route("/GetOrder/Personal/Status")]
    [ProducesResponseType(typeof(PersonalOrder), 200)]
    public async Task<IActionResult> GetPersonalOrder(Guid id, string email, ulong number)
    {
        PersonalOrder? order = await _context.PersonalOrders.FindAsync(id);
        if (order == null || order.Number != number || order.Email != email)
        {
            return NotFound();
        }

        return Ok(order);
    }
    
    [HttpPost]
    [Route("/PostCompanyOrder")]
    [ProducesResponseType(typeof(Guid), 200)]
    public async Task<IActionResult> PostCompanyOrder([FromBody] PostCompanyOrder companyOrder)
    {
        Guid id = Guid.NewGuid();
        CompanyOrder order = new CompanyOrder
        {
            OrderId = id,
            CompanyName = companyOrder.CompanyName,
            CompanyNip = companyOrder.CompanyNip,
            OrderAddress = companyOrder.OrderAddress,
            OrderCity = companyOrder.OrderCity,
            OrderCountry = companyOrder.OrderCountry,
            OrderPostalCode = companyOrder.OrderPostalCode,
            OrderState = companyOrder.OrderState,
            Email = companyOrder.Email,
            ContactNumber = companyOrder.ContactNumber,
            ShippingName = companyOrder.ShippingName,
            ShippingSurname = companyOrder.ShippingSurname,
            ShippingOption = companyOrder.ShippingOption,
            ShippingCity = companyOrder.ShippingCity,
            ShippingCountry = companyOrder.ShippingCountry,
            ShippingAddress = companyOrder.ShippingAddress,
            ShippingState = companyOrder.ShippingState,
            ShippingPostalCode = companyOrder.ShippingPostalCode,
            CreatedAt = DateTime.Today,
            Status = OrderStatus.Placed,
            Number = CalculateOrderNumber(id.ToString()),
            OrderValue = companyOrder.OrderValue
        };
        
        try
        {
            await _context.CompanyOrders.AddAsync(order);
            await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return Problem();
        }
        
        foreach (var product in companyOrder.OrderProducts)
        {
            ProductsInCompanyOrders row = new ProductsInCompanyOrders()
            {
                OrderId = id,
                ProductId = product.ProductId,
                Quantity = product.Quantity,
            };
            
            await _context.ProductsInCompanyOrders.AddAsync(row);
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
        
        return Ok(order.OrderId);
    }
    
    [HttpPost]
    [Route("/PostPersonalOrder")]
    [ProducesResponseType(typeof(Guid), 200)]
    public async Task<IActionResult> PostPersonalOrder([FromBody] PostPersonalOrder personalOrder)
    {
        Guid id = Guid.NewGuid();
        PersonalOrder order = new PersonalOrder
        {
            OrderId = id,
            OrderName = personalOrder.OrderName,
            OrderSurname = personalOrder.OrderSurname,
            OrderAddress = personalOrder.OrderAddress,
            OrderCity = personalOrder.OrderCity,
            OrderCountry = personalOrder.OrderCountry,
            OrderPostalCode = personalOrder.OrderPostalCode,
            OrderState = personalOrder.OrderState,
            Email = personalOrder.Email,
            ContactNumber = personalOrder.ContactNumber,
            ShippingName = personalOrder.ShippingName,
            ShippingSurname = personalOrder.ShippingSurname,
            ShippingOption = personalOrder.ShippingOption,
            ShippingCity = personalOrder.ShippingCity,
            ShippingCountry = personalOrder.ShippingCountry,
            ShippingAddress = personalOrder.ShippingAddress,
            ShippingState = personalOrder.ShippingState,
            ShippingPostalCode = personalOrder.ShippingPostalCode,
            CreatedAt = DateTime.Today,
            Status = OrderStatus.Placed,
            Number = CalculateOrderNumber(id.ToString()),
            OrderValue = personalOrder.OrderValue
        };

        try
        {
            await _context.PersonalOrders.AddAsync(order);
            await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return Problem();
        }

        foreach (var product in personalOrder.OrderProducts)
        {
            ProductsInOrders row = new ProductsInOrders()
            {
                OrderId = id,
                ProductId = product.ProductId,
                Quantity = product.Quantity,
            };
            
            await _context.ProductsInOrders.AddAsync(row);
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
        
        return Ok(order.OrderId);
    }

    [HttpPut]
    [Route("/PutPersonalOrder")]
    public async Task<IActionResult> UpdatePersonalOrder(Guid id, OrderStatus status)
    {
        PersonalOrder? order = await _context.PersonalOrders.FindAsync(id);
        if (order is null)
        {
            return NotFound();
        }

        order.Status = status;
        await _context.SaveChangesAsync();
        return Ok();
    }
    
    [HttpPut]
    [Route("/PutCompanyOrder")]
    public async Task<IActionResult> UpdateCompanyOrder(Guid id, OrderStatus status)
    {
        CompanyOrder? order = await _context.CompanyOrders.FindAsync(id);
        if (order is null)
        {
            return NotFound();
        }

        order.Status = status;
        await _context.SaveChangesAsync();
        await _emailNotifier.NotifyCompanyOrderStateChanged(order);
        return Ok();
    }
    
    private UInt64 CalculateOrderNumber(string guid)
    {
        UInt64 number = 0;
        foreach (var c in guid)
        {
            number += c;
        }

        number *= (UInt64)Random.Shared.Next(100, 300);
        while (_context.CompanyOrders.Any(o => o.Number == number) || _context.PersonalOrders.Any(o => o.Number == number))
        {
            number++;
        }
        
        return number;
    }
}