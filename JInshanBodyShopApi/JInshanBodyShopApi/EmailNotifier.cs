using JInshanBodyShopApi.Models;
using JInshanBodyShopApi.Utils;
using MailKit.Security;
using MimeKit;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;

namespace JInshanBodyShopApi;

public class EmailNotifier
{
    private readonly string _name;
    private readonly string _email;
    private readonly string _password;
    
    public EmailNotifier(string name, string email, string password)
    {
        _name = name;
        _email = email;
        _password = password;
    }
    
    public async Task NotifyCompanyOrderStateChanged(OrderBase order)
    {
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress(_name,_email));
        message.To.Add(MailboxAddress.Parse(order.Email));
        message.Subject = "Zmiana statusu zamówienia " + order.Number + ".";
        message.Headers.Add("List-Unsubscribe", "<mailto:jinshanbodyshop86@gmail.com>.");
        string body;
        string statusLink = $@"http://localhost:5173/order/company/status/{order.OrderId}";
        switch (order.Status)
        {
            case OrderStatus.Placed:
            {
                 body = $@"
                    <html>
                    <body style='font-family: Arial, sans-serif; color: #333; font-size: 14px;'>
                        <h2 style='color: #4CAF50;'>Dzień dobry!</h2>
                        <p>Miło nam poinformować, że przyjęliśmy Twoje zamówienie numer {order.Number} do realizacji.</p>
                        <p>Możesz je śledzić pod tym adresem: <a href={statusLink}>adres</a></p>
                        <p>O postępach w realizacji będziemy Cię informować mailowo.</p>
                        <p>Aktualnie oczekujemy na płatność.</p>
                        <p>Numer konta: 89 0000 0000 0000 0000</p>
                        <p>Tytuł: Zamowienie nr: {order.Number}</p>
                        <p>Kwota: {order.OrderValue}PLN</p>
                        <p>Pozdrawiamy</br> Zespół 86Tecnica</p>
                    </body>
                    </html>";
                break;
            }
            case OrderStatus.Payed:
            {
                body = $@"
                    <html>
                    <body style='font-family: Arial, sans-serif; color: #333; font-size: 14px;'>
                        <h2 style='color: #4CAF50;'>Dzień dobry!</h2>
                        <p>Miło nam poinformować, że otrzymaliśmy płatność za twoje zamówienie.</p>
                        <p>Zamówienie możesz śledzić pod tym adresem: <a href={statusLink}>adres</a></p>
                        <p>O postępach w realizacji będziemy Cię informować mailowo.</p>
                        <p>Pozdrawiamy</br> Zespół 86Tecnica</p>
                    </body>
                    </html>";
                break;
            }
            case OrderStatus.Ready:
            {
                body = $@"
                    <html>
                    <body style='font-family: Arial, sans-serif; color: #333; font-size: 14px;'>
                        <h2 style='color: #4CAF50;'>Dzień dobry!</h2>
                        <p>Twoje zamówienie jest gotowe do wysyłki. Oczekujemy na odebranie go przez kuriera.</p>
                        <p>Zamówienie możesz śledzić pod tym adresem: <a href={statusLink}>adres</a></p>
                        <p>O postępach w realizacji będziemy Cię informować mailowo.</p>
                        <p>Pozdrawiamy</br> Zespół 86Tecnica</p>
                    </body>
                    </html>";
                break;
            }
            case OrderStatus.Shipped:
            {
                body = $@"
                    <html>
                    <body style='font-family: Arial, sans-serif; color: #333; font-size: 14px;'>
                        <h2 style='color: #4CAF50;'>Dzień dobry!</h2>
                        <p>Twoje zamówienie zostało odebrane przez kuriera z naszego magazynu.</p>
                        <p>Zamówienie możesz śledzić pod tym adresem: <a href={statusLink}>adres</a></p>
                        <p>O postępach w realizacji będziemy Cię informować mailowo.</p>
                        <p>Pozdrawiamy</br> Zespół 86Tecnica</p>
                    </body>
                    </html>";
                break;
            }
            case OrderStatus.Delivered:
            {
                body = $@"
                    <html>
                    <body style='font-family: Arial, sans-serif; color: #333; font-size: 14px;'>
                        <h2 style='color: #4CAF50;'>Dzień dobry!</h2>
                        <p>Dziękujemy za zaufanie i wybranie naszej firmy.</p>
                        <p>Mamy nadzieję, że nasze produkty spełnią Twoje wymagania.</p>
                        <p>W razie jakichkolwiek problemów czekamy na kontakt pod adresem: jinshanbodyshop86@gmail.com.</p>
                        <p>Pozdrawiamy</br> Zespół 86Tecnica</p>
                    </body>
                    </html>";
                break;
            }
            case OrderStatus.Cancelled:
            {
                body = $@"
                    <html>
                    <body style='font-family: Arial, sans-serif; color: #333; font-size: 14px;'>
                        <h2 style='color: #4CAF50;'>Dzień dobry!</h2>
                        <p>Niestety doszło do anulowania Twojego zamówienia.</p>
                        <p>Jeśli uważasz, że doszło do pomyłki zapraszamy do kontaktu pod adresem: jinshanbodyszhop86@gmail.com.</p>
                        <p>Pozdrawiamy</br> Zespół 86Tecnica</p>
                    </body>
                    </html>";
                break;
            }
            default:
            {
                body = $@"
                    <html>
                    <body style='font-family: Arial, sans-serif; color: #333; font-size: 14px;'>
                        <h2 style='color: #4CAF50;'>Dzień dobry!</h2>
                        <p>Miło nam poinformować, że przyjęliśmy Twoje zamówienie do realizacji.</p>
                        <p>Możesz je śledzić pod tym adresem: <a href=>adres</a></p>
                        <p>O postępach w realizacji będziemy Cię informować mailowo.</p>
                        <p>Pozdrawiamy</p>
                        <p>Zespół 86Tecnica</p>
                    </body>
                    </html>";
                break;
            }
        }
        
        var builder = new BodyBuilder
        {
            HtmlBody = body,
            TextBody = "essa"
        };
        message.Body = builder.ToMessageBody();
        using var client = new SmtpClient();
        await client.ConnectAsync("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
        await client.AuthenticateAsync(_email, _password);
        await client.SendAsync(message);
        await client.DisconnectAsync(true);
    }
}