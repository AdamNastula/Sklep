using System.ComponentModel.DataAnnotations.Schema;
using System.Linq.Expressions;
using JInshanBodyShopApi.Utils;

namespace JInshanBodyShopApi.Models;

public class PersonalOrder : OrderBase
{
    [Column(TypeName = "varchar(30)")]
    public required string OrderName {get; set;}
    
    [Column(TypeName = "varchar(60)")]
    public required string OrderSurname {get; set;}
    
    public static Expression<Func<PersonalOrder, object>> KeySelector(string orderByColumn)
    {
        return orderByColumn.ToLower() switch
        {
            "date" => order => order.CreatedAt,
            _ => order => order.OrderId
        };
    }
    
    public static IQueryable<PersonalOrder> Filter(IQueryable<PersonalOrder> orders, OrderStatus[]? filterByStatus)
    {
        if (filterByStatus is not null && filterByStatus.Length != 0)
        {
            return orders.Where(order => filterByStatus.Contains(order.Status));
        }
        
        return orders;
    }
}