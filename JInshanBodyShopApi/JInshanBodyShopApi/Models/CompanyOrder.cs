using System.ComponentModel.DataAnnotations.Schema;
using System.Linq.Expressions;
using JInshanBodyShopApi.Utils;

namespace JInshanBodyShopApi.Models;

public class CompanyOrder : OrderBase
{
    [Column(TypeName = "varchar(50)")]
    public required string CompanyName { get; set; }
    
    [Column(TypeName = "varchar(10)")]
    public required string CompanyNip  { get; set; }
    
    public static Expression<Func<CompanyOrder, object>> KeySelector(string orderByColumn)
    {
        return orderByColumn.ToLower() switch
        {
            "date" => order => order.CreatedAt,
            _ => order => order.OrderId
        };
    }
    
    public static IQueryable<CompanyOrder> Filter(IQueryable<CompanyOrder> orders, OrderStatus[]? filterByStatus)
    {
        if (filterByStatus is not null && filterByStatus.Length != 0)
        {
            return orders.Where(order => filterByStatus.Contains(order.Status));
        }
        
        return orders;
    }
}