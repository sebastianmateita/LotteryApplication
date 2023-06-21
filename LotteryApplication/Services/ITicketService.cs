using LotteryApplication.Models;
using LotteryApplication.Services.Models;

namespace LotteryApplication.Services
{
    public interface ITicketService
    {
        public Guid DrawTicket(DrawTicketModel model);

        public List<Ticket> GetTicketList();

        public Ticket? GetTicket(Guid ticketId);
    }
}
