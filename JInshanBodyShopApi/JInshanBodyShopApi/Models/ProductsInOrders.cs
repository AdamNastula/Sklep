using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
namespace JInshanBodyShopApi.Models;

[PrimaryKey(nameof(OrderId), nameof(ProductId))]
public class ProductsInOrders
{
    [ForeignKey("OrderId")]
    public Guid OrderId { get; set; }
    
    [ForeignKey("ProductId")]
    public Guid ProductId { get; set; }
    
    [Column(TypeName = "INT UNSIGNED")]
    public uint Quantity { get; set; }
}