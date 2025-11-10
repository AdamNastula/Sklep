using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
namespace JInshanBodyShopApi.Models;

public class SimilarProducts
{
    [Key]
    public Guid Id { get; set; }
    [ForeignKey("ProductId")]
    public Guid ProductId { get; set; }
    [ForeignKey("ProductId")]
    public Guid SimilarProductId { get; set; }    
}