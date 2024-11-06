package comandoCnc;

import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.border.EmptyBorder;
import javax.swing.JButton;
import java.awt.Font;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class Console extends JFrame {

	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private JTextArea textComandList;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Console frame = new Console();
					frame.setVisible(true);
					
					
					
					
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public Console() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(50, 50, 509, 605);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setDefaultCloseOperation(DISPOSE_ON_CLOSE);

		setContentPane(contentPane);
		contentPane.setLayout(null);
		JScrollPane textComandListS = new JScrollPane();
		contentPane.add(textComandListS);
		textComandListS.setBounds(24, 11, 461, 477);
		
		textComandList = new JTextArea();
		textComandList.setEnabled(false);
		textComandListS.setViewportView(textComandList);
		
		JButton btnNewButton = new JButton("Limpar");
		
		btnNewButton.setFont(new Font("Arial Black", Font.PLAIN, 17));
		btnNewButton.setBounds(344, 523, 141, 34);
		contentPane.add(btnNewButton);
		
		
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				textComandList.setText("");
				
			}
		});
	}
	
	public void addConsole(String txt) {
		textComandList.append(txt);
		
	}
}
