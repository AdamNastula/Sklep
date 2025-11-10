using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JInshanBodyShopApi.Models;

public class AdditionalProductInfo
{
    [Key]
    public Guid Id { get; set; }
    [ForeignKey("ProductId")]
    public Guid ProductId { get; set; }
    [Column(TypeName = "varchar(50)")]
    public required string Information { get; set; }
    [Column(TypeName = "varchar(25)")]
    public required string InformationName { get; set; }
}