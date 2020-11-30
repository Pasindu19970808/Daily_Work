using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Chapter2__if_else
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (checkBox1.Checked == true && label1.BackColor != Color.Red) 
            {
                label1.BackColor = Color.Red;
            
            }
            else if (checkBox1.Checked == true && label1.BackColor == Color.Red)
            {
                label1.BackColor = Color.Blue;
                //
            }
            else if (checkBox1.Checked == false) 
            {
                MessageBox.Show("The Box is not checked");
            }
        }
    }
}
