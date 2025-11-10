namespace JInshanBodyShopApi.PostModels;

public class PostCompanyOrder : PostOrder
{
    public required string CompanyName {get; set;}
    public required string CompanyNip {get; set;}
}