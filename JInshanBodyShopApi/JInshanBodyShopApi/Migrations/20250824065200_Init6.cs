using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JInshanBodyShopApi.Migrations
{
    /// <inheritdoc />
    public partial class Init6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<ulong>(
                name: "Number",
                table: "PersonalOrders",
                type: "BIGINT UNSIGNED",
                nullable: false,
                defaultValue: 0ul);

            migrationBuilder.AddColumn<ulong>(
                name: "Number",
                table: "CompanyOrders",
                type: "BIGINT UNSIGNED",
                nullable: false,
                defaultValue: 0ul);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Number",
                table: "PersonalOrders");

            migrationBuilder.DropColumn(
                name: "Number",
                table: "CompanyOrders");
        }
    }
}
