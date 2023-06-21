using LotteryApplication.Models;
using LotteryApplication.Services;
using Microsoft.AspNetCore.Mvc;

namespace LotteryApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly ITicketService ticketService;

        public TicketsController(ITicketService ticketService)
        {
            this.ticketService = ticketService;
        }

        [HttpPost]
        [Route("Draw")]
        public IActionResult Draw([FromBody] DrawTicketModel model)
        {
            var ticketId = ticketService.DrawTicket(model);

            return Ok(ticketId);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetTicket([FromRoute] Guid id)
        {
            var ticket = ticketService.GetTicket(id);

            return Ok(ticket);
        }

        [HttpGet]
        public IActionResult GetAllTickets()
        {
            var tickets = ticketService.GetTicketList();

            return Ok(tickets);
        }
    }
}