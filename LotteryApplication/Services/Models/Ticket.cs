namespace LotteryApplication.Services.Models
{
    public class Ticket
    {
        public Guid Id { get; set; }

        public DateTime CreatedDate { get; set; }

        public List<Draw> Draws { get; set; } = default!;

        public int? SuperZahl { get; set; }
    }
}
