namespace LotteryApplication.Services.Models
{
    public class Draw
    {
        public Draw()
        {
            PickedNumbers = new List<int>();
        }

        public List<int> PickedNumbers { get; set; }
    }
}
