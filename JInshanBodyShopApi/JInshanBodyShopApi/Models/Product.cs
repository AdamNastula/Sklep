using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

namespace JInshanBodyShopApi.Models;

public enum ProductType {Rims, Suspension, Exhaust, Body, Carbon, Mx5, Is200, E46} 
public enum ProductShop {Jinshan, Tecnica, Third}

public class Product
{
    [Key]
    public Guid ProductId { get; set; }
    
    [Column(TypeName = "varchar(25)")]
    public string Name { get; set; } = "";
    
    [Precision(10, 2)]
    public decimal Price { get; set; }
    
    [Column(TypeName = "varchar(400)")]
    public string Description { get; set; } = "";
    
    [Precision(10, 2)]
    public decimal Weight { get; set; }
    
    [Column(TypeName = "varchar(50)")]
    public required ProductType Category { get; set; }
    
    public uint  Quantity { get; set; }
    public bool Withdrawn { get; set; }
    public ProductShop Shop { get; set; }

    public static Expression<Func<Product, object>> GetKeySelector(string orderByColumn)
    {
        return orderByColumn.ToLower() switch
        {
            "name" => product => product.Name,
            "price" => product => product.Price,
            "description" => product => product.Description,
            "weight" => product => product.Weight,
            "category" => product => product.Category,
            "quantity" => product => product.Quantity,
            "withdrawn" => product => product.Withdrawn,
            "shop" => product => product.Shop,
            _ => product => product.ProductId
        };
    }

    public static IQueryable<Product> Filter(IQueryable<Product> products, ProductType[]? filterByCategory, bool? withdrawn, ProductShop? shop, string? name)
    {
        if (withdrawn is not null)
        {
            products = products.Where(product => product.Withdrawn == withdrawn);
        }

        if (shop is not null)
        {
            products = products.Where(product => product.Shop == shop);
        }

        if (name is not null)
        {
            products = products.Where(product => product.Name.Contains(name));
        }
        
        if (filterByCategory is not null && filterByCategory.Length != 0)
        {
            return products.Where(prod => filterByCategory.Contains(prod.Category));
        }
        
        return products;
    }
}