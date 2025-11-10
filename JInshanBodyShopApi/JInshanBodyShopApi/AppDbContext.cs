using Microsoft.EntityFrameworkCore;
using JInshanBodyShopApi.Models;

namespace JInshanBodyShopApi;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<Product> Products => Set<Product>();
    public DbSet<AdditionalProductInfo>  AdditionalProductInfos => Set<AdditionalProductInfo>();
    public DbSet<CompanyOrder> CompanyOrders => Set<CompanyOrder>();
    public DbSet<PersonalOrder> PersonalOrders => Set<PersonalOrder>();
    public DbSet<SimilarProducts> SimilarProducts => Set<SimilarProducts>();
    
    public DbSet<ProductsInOrders>  ProductsInOrders => Set<ProductsInOrders>();

    public DbSet<ProductsInCompanyOrders> ProductsInCompanyOrders => Set<ProductsInCompanyOrders>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.HasCharSet("utf8mb4");
        modelBuilder.UseCollation("utf8mb4_polish_ci");
        modelBuilder.Entity<Product>().ToTable("Products");
        modelBuilder.Entity<AdditionalProductInfo>().ToTable("AdditionalProductInfos");
        modelBuilder.Entity<CompanyOrder>().ToTable("CompanyOrders");
        modelBuilder.Entity<PersonalOrder>().ToTable("PersonalOrders");
        modelBuilder.Entity<SimilarProducts>().ToTable("SimilarProducts");
        modelBuilder.Entity<ProductsInOrders>().ToTable("ProductsInOrders");
        modelBuilder.Entity<ProductsInCompanyOrders>().ToTable("ProductsInCompanyOrders");
    }
}