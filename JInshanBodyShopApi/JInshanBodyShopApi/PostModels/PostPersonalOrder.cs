namespace JInshanBodyShopApi.PostModels;

public class PostPersonalOrder : PostOrder
{
    public required string OrderName {get; set;}
    public required string OrderSurname {get; set;}
    
}