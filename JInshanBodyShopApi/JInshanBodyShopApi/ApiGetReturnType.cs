using JInshanBodyShopApi.Models;

namespace JInshanBodyShopApi;

public class ApiGetReturnType<T>
{
    public int MaxPages { get; set; }
    public required List<T> Items { get; set; }
}