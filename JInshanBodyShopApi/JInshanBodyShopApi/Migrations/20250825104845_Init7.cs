using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JInshanBodyShopApi.Migrations
{
    /// <inheritdoc />
    public partial class Init7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "PersonalOrders",
                newName: "OrderId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "CompanyOrders",
                newName: "OrderId");

            migrationBuilder.AlterDatabase(
                collation: "utf8mb4_polish_ci")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterTable(
                name: "SimilarProducts")
                .Annotation("Relational:Collation", "utf8mb4_polish_ci")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterTable(
                name: "Products")
                .Annotation("Relational:Collation", "utf8mb4_polish_ci")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterTable(
                name: "PersonalOrders")
                .Annotation("Relational:Collation", "utf8mb4_polish_ci")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterTable(
                name: "CompanyOrders")
                .Annotation("Relational:Collation", "utf8mb4_polish_ci")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterTable(
                name: "AdditionalProductInfos")
                .Annotation("Relational:Collation", "utf8mb4_polish_ci")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Products",
                type: "varchar(25)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(25)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Products",
                type: "varchar(400)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(400)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingSurname",
                table: "PersonalOrders",
                type: "varchar(60)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingState",
                table: "PersonalOrders",
                type: "varchar(30)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingPostalCode",
                table: "PersonalOrders",
                type: "varchar(6)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(6)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingOption",
                table: "PersonalOrders",
                type: "varchar(10)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(10)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingName",
                table: "PersonalOrders",
                type: "varchar(30)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingCountry",
                table: "PersonalOrders",
                type: "varchar(30)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingCity",
                table: "PersonalOrders",
                type: "varchar(60)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingAddress",
                table: "PersonalOrders",
                type: "varchar(60)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "OrderSurname",
                table: "PersonalOrders",
                type: "varchar(60)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "OrderState",
                table: "PersonalOrders",
                type: "varchar(30)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "OrderPostalCode",
                table: "PersonalOrders",
                type: "varchar(6)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(6)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "OrderName",
                table: "PersonalOrders",
                type: "varchar(30)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "OrderCountry",
                table: "PersonalOrders",
                type: "varchar(30)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "OrderCity",
                table: "PersonalOrders",
                type: "varchar(60)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "OrderAddress",
                table: "PersonalOrders",
                type: "varchar(60)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "PersonalOrders",
                type: "varchar(50)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(50)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ContactNumber",
                table: "PersonalOrders",
                type: "varchar(9)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(9)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<uint>(
                name: "OrderValue",
                table: "PersonalOrders",
                type: "int unsigned",
                nullable: false,
                defaultValue: 0u);

            migrationBuilder.AlterColumn<string>(
                name: "ShippingSurname",
                table: "CompanyOrders",
                type: "varchar(60)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingState",
                table: "CompanyOrders",
                type: "varchar(30)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingPostalCode",
                table: "CompanyOrders",
                type: "varchar(6)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(6)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingOption",
                table: "CompanyOrders",
                type: "varchar(10)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(10)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingName",
                table: "CompanyOrders",
                type: "varchar(30)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingCountry",
                table: "CompanyOrders",
                type: "varchar(30)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingCity",
                table: "CompanyOrders",
                type: "varchar(60)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingAddress",
                table: "CompanyOrders",
                type: "varchar(60)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "OrderState",
                table: "CompanyOrders",
                type: "varchar(30)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "OrderPostalCode",
                table: "CompanyOrders",
                type: "varchar(6)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(6)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "OrderCountry",
                table: "CompanyOrders",
                type: "varchar(30)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "OrderCity",
                table: "CompanyOrders",
                type: "varchar(60)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "OrderAddress",
                table: "CompanyOrders",
                type: "varchar(60)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "CompanyOrders",
                type: "varchar(50)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(50)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ContactNumber",
                table: "CompanyOrders",
                type: "varchar(9)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(9)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "CompanyNip",
                table: "CompanyOrders",
                type: "varchar(10)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(10)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "CompanyName",
                table: "CompanyOrders",
                type: "varchar(50)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(50)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<uint>(
                name: "OrderValue",
                table: "CompanyOrders",
                type: "int unsigned",
                nullable: false,
                defaultValue: 0u);

            migrationBuilder.AlterColumn<string>(
                name: "InformationName",
                table: "AdditionalProductInfos",
                type: "varchar(25)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(25)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Information",
                table: "AdditionalProductInfos",
                type: "varchar(50)",
                nullable: false,
                collation: "utf8mb4_polish_ci",
                oldClrType: typeof(string),
                oldType: "varchar(50)")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "ProductsInOrders",
                columns: table => new
                {
                    OrderId = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    ProductId = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductsInOrders", x => new { x.OrderId, x.ProductId });
                })
                .Annotation("Relational:Collation", "utf8mb4_polish_ci");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductsInOrders");

            migrationBuilder.DropColumn(
                name: "OrderValue",
                table: "PersonalOrders");

            migrationBuilder.DropColumn(
                name: "OrderValue",
                table: "CompanyOrders");

            migrationBuilder.RenameColumn(
                name: "OrderId",
                table: "PersonalOrders",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "OrderId",
                table: "CompanyOrders",
                newName: "Id");

            migrationBuilder.AlterDatabase(
                oldCollation: "utf8mb4_polish_ci")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterTable(
                name: "SimilarProducts")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterTable(
                name: "Products")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterTable(
                name: "PersonalOrders")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterTable(
                name: "CompanyOrders")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterTable(
                name: "AdditionalProductInfos")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Products",
                type: "varchar(25)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(25)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Products",
                type: "varchar(400)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(400)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingSurname",
                table: "PersonalOrders",
                type: "varchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingState",
                table: "PersonalOrders",
                type: "varchar(30)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingPostalCode",
                table: "PersonalOrders",
                type: "varchar(6)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(6)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingOption",
                table: "PersonalOrders",
                type: "varchar(10)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(10)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingName",
                table: "PersonalOrders",
                type: "varchar(30)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingCountry",
                table: "PersonalOrders",
                type: "varchar(30)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingCity",
                table: "PersonalOrders",
                type: "varchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingAddress",
                table: "PersonalOrders",
                type: "varchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "OrderSurname",
                table: "PersonalOrders",
                type: "varchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "OrderState",
                table: "PersonalOrders",
                type: "varchar(30)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "OrderPostalCode",
                table: "PersonalOrders",
                type: "varchar(6)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(6)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "OrderName",
                table: "PersonalOrders",
                type: "varchar(30)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "OrderCountry",
                table: "PersonalOrders",
                type: "varchar(30)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "OrderCity",
                table: "PersonalOrders",
                type: "varchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "OrderAddress",
                table: "PersonalOrders",
                type: "varchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "PersonalOrders",
                type: "varchar(50)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(50)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ContactNumber",
                table: "PersonalOrders",
                type: "varchar(9)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(9)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingSurname",
                table: "CompanyOrders",
                type: "varchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingState",
                table: "CompanyOrders",
                type: "varchar(30)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingPostalCode",
                table: "CompanyOrders",
                type: "varchar(6)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(6)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingOption",
                table: "CompanyOrders",
                type: "varchar(10)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(10)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingName",
                table: "CompanyOrders",
                type: "varchar(30)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingCountry",
                table: "CompanyOrders",
                type: "varchar(30)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingCity",
                table: "CompanyOrders",
                type: "varchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ShippingAddress",
                table: "CompanyOrders",
                type: "varchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "OrderState",
                table: "CompanyOrders",
                type: "varchar(30)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "OrderPostalCode",
                table: "CompanyOrders",
                type: "varchar(6)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(6)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "OrderCountry",
                table: "CompanyOrders",
                type: "varchar(30)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(30)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "OrderCity",
                table: "CompanyOrders",
                type: "varchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "OrderAddress",
                table: "CompanyOrders",
                type: "varchar(60)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "CompanyOrders",
                type: "varchar(50)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(50)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "ContactNumber",
                table: "CompanyOrders",
                type: "varchar(9)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(9)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "CompanyNip",
                table: "CompanyOrders",
                type: "varchar(10)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(10)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "CompanyName",
                table: "CompanyOrders",
                type: "varchar(50)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(50)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "InformationName",
                table: "AdditionalProductInfos",
                type: "varchar(25)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(25)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");

            migrationBuilder.AlterColumn<string>(
                name: "Information",
                table: "AdditionalProductInfos",
                type: "varchar(50)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(50)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("Relational:Collation", "utf8mb4_polish_ci");
        }
    }
}
