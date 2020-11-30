using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Chapter_2_Program_2__Loops_
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string name = "Quentin";
            int x = 3;

            x = x * 17;
            double d = Math.PI / 2;
            MessageBox.Show("name is" + name +"\n"
                            + "x is " + x + "\n"
                            + "d is " + d);
        }

        private void button4_Click(object sender, EventArgs e)
        {
            int count = 0;

            while (count < 10) 
            {

                count = count + 1;
            }

            for (int i = 0; i < 5; i++)
            {
                count = count - 1;
            }

            MessageBox.Show(Convert.ToString(count));
        }

        private void button3_Click(object sender, EventArgs e)
        {
            int j = 2;
            for (int i = 1; i < 100;
            i = i * 2)
            {
                j = j - i;
                while (j < 25)
                {
                    j = j + 5;
                }
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            int p = 2;
            for (int q = 2; q < 32;
            q = q * 2)
            {
                while (p < q)
                {
                    p = p * 2;
                }
                q = p - q;
            }
        }

        
    }
}
