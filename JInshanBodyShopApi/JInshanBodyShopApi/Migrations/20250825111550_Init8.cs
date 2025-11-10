using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JInshanBodyShopApi.Migrations
{
    /// <inheritdoc />
    public partial class Init8 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<uint>(
                name: "Quantity",
                table: "ProductsInOrders",
                type: "INT UNSIGNED",
                nullable: false,
                defaultValue: 0u);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "ProductsInOrders");
        }
    }
}
