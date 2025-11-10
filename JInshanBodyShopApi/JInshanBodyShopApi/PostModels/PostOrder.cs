namespace JInshanBodyShopApi.PostModels;

public class ProductAndQuantity
{
    public Guid ProductId { get; set; }
    public uint Quantity {get; set;}
}

public class PostOrder
{
    public required string Email { get; set; }
    public required string ContactNumber {get; set;}
    public required string OrderCountry { get; set; }
    public required string OrderState { get; set; }
    public required string OrderAddress { get; set; }
    public required string OrderCity { get; set; }
    public required string OrderPostalCode { get; set; }
    public required string ShippingCountry { get; set; }
    public required string ShippingState { get; set; }
    public required string ShippingAddress { get; set; }
    public required string ShippingCity { get; set; }
    public required string ShippingPostalCode { get; set; }
    public required string ShippingName { get; set; }
    public required string ShippingSurname { get; set; }
    public required string ShippingOption {get; set;}
    
    public required uint OrderValue {get; set;}
    
    public required List<ProductAndQuantity> OrderProducts {get; set;}
}