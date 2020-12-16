using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Flashy_Thing
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            while (Visible)
            {
                int c = 0;
                while (c < 254 && Visible)
                {

                    this.BackColor = Color.FromArgb(255 - c, 255 - c, c);
                    Application.DoEvents();
                    System.Threading.Thread.Sleep(3);
                    c++;
                }

                while (c > 0 && Visible)
                {
                    this.BackColor = Color.FromArgb(255 - c, 255 - c, c);
                    Application.DoEvents();
                    System.Threading.Thread.Sleep(3);
                    c--;

                }
            }
            
            //MessageBox.Show(Convert.ToString(c));

        }
    }
}
