using LotteryApplication.Models;
using LotteryApplication.Services.Models;
using Newtonsoft.Json;

namespace LotteryApplication.Services
{
    public class TicketService : ITicketService
    {
        private static readonly string TICKETS_PATH = Path.Combine(Directory.GetCurrentDirectory(), "SavedTickets\\savedTickets.json");

        public Guid DrawTicket(DrawTicketModel model)
        {
            var generatedDraws = new List<Draw>();
            var random = new Random();

            for (int i = 0; i < model.NumberOfBoxes; i++)
            {
                var generatedNumbers = new List<int>();

                while (generatedNumbers.Count < 6)
                {
                    var nextNumber = random.Next(1, 49);
                    
                    if (!generatedNumbers.Contains(nextNumber))
                    {                    
                        generatedNumbers.Add(nextNumber);
                    }
                }
              
                generatedDraws.Add(new Draw
                {
                    PickedNumbers = generatedNumbers.OrderBy(number => number).ToList(),
                });
            }

            var generatedTicket = new Ticket
            {
                Id = Guid.NewGuid(),
                CreatedDate = DateTime.Now,
                Draws = generatedDraws,
                SuperZahl = model.GenerateSuperZahl ? random.Next(9) : null
            };

            var tickets = JsonConvert.DeserializeObject<List<Ticket>>(File.ReadAllText(TICKETS_PATH)) ?? new List<Ticket>();
         
            tickets.Add(generatedTicket);
            
            File.WriteAllText(TICKETS_PATH, JsonConvert.SerializeObject(tickets, Formatting.Indented));

            return generatedTicket.Id;
        }

        public Ticket? GetTicket(Guid ticketId)
        {
            var tickets = JsonConvert.DeserializeObject<List<Ticket>>(File.ReadAllText(TICKETS_PATH)) ?? new List<Ticket>();

            return tickets.SingleOrDefault(ticket => ticket.Id == ticketId);
        }

        public List<Ticket> GetTicketList()
        {
            var tickets = JsonConvert.DeserializeObject<List<Ticket>>(File.ReadAllText(TICKETS_PATH)) ?? new List<Ticket>();

            return tickets.OrderByDescending(ticket => ticket.CreatedDate).ToList();
        }
    }
}
