using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq.Expressions;
using JInshanBodyShopApi.Models;

namespace JInshanBodyShopApi.Utils;

public enum OrderStatus {Placed, Payed, Ready, Shipped, Delivered, Cancelled}

public class OrderBase
{
    [Key]
    public Guid OrderId { get; set; }
    
    [Column(TypeName = "varchar(50)")]
    public required string Email { get; set; }
    
    [Column(TypeName = "varchar(9)")]
    public required string ContactNumber {get; set;}
    
    [Column(TypeName = "varchar(30)")]
    public required string OrderCountry { get; set; }
    
    [Column(TypeName = "varchar(30)")]
    public required string OrderState { get; set; }
    
    [Column(TypeName = "varchar(60)")]
    public required string OrderAddress { get; set; }
    
    [Column(TypeName = "varchar(60)")]
    public required string OrderCity { get; set; }
    
    [Column(TypeName = "varchar(6)")]
    public required string OrderPostalCode { get; set; }
    
    [Column(TypeName = "varchar(30)")]
    public required string ShippingCountry { get; set; }
    
    [Column(TypeName = "varchar(30)")]
    public required string ShippingState { get; set; }
    
    [Column(TypeName = "varchar(60)")]
    public required string ShippingAddress { get; set; }
    
    [Column(TypeName = "varchar(60)")]
    public required string ShippingCity { get; set; }
    
    [Column(TypeName = "varchar(6)")]
    public required string ShippingPostalCode { get; set; }
    
    [Column(TypeName = "varchar(30)")]
    public required string ShippingName { get; set; }
    
    [Column(TypeName = "varchar(60)")]
    public required string ShippingSurname { get; set; }
    
    [Column(TypeName = "varchar(10)")]
    public required string ShippingOption {get; set;}
    
    [Column(TypeName = "date")]
    public DateTime CreatedAt { get; set; }
    
    public OrderStatus Status { get; set; }
    [Column(TypeName = "BIGINT UNSIGNED")]
    public UInt64 Number { get; set; }
    
    public required uint OrderValue {get; set;}
}