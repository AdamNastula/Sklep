using JInshanBodyShopApi.Models;

namespace JInshanBodyShopApi.PostModels;

public class PostProduct
{
    public string? Name { get; init; } = null;
    public decimal? Price { get; init; } = null;
    public string? Description { get; init; } = null;
    public decimal? Weight { get; init; } = null;
    public uint? Quantity { get; init; } = null;

    public bool? Withdrawn { get; init; } = null;

    public ProductType? Category { get; init; } = null;
    public ProductShop? Shop { get; init; } = null;
}