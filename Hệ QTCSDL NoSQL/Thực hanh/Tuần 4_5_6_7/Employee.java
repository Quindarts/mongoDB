package tuan2_49_QuanLyNhanVien;

import java.io.Serializable;
import java.util.Objects;

public class Employee implements Serializable{
	private String employeeID;
	private String firstName;
	private String lastName;
	private String sex;
	private int ages;
	private double salary;
	
	
	public String getEmployeeID() {
		return employeeID;
	}
	
	public void setEmployeeID(String employeeID) throws Exception {
		if(employeeID.isEmpty())
			throw new Exception("Mã nhân viên là trường bắt buộc nhập!");
		else
			this.employeeID = employeeID;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) throws Exception {
		if(firstName.trim().length() == 0)
			throw new Exception("Tên không được để trống");
		else
			this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) throws Exception {
		if(lastName.trim().length() == 0)
			throw new Exception("Họ không được để trống");
		else
			this.lastName = lastName;
	}
	
	public String getSex() {
		return sex;
	}
	
	public void setSex(String sex) {
		this.sex = sex;
	}
	
	public int getAges() {
		return ages;
	}
	
	public void setAges(int ages) throws Exception {
		if(ages<18 || ages>65)
			throw new Exception("Độ tuổi không phù hợp để lao động!!");
		else
			this.ages = ages;
	}
	
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) throws Exception {
		if(salary < 0)
			throw new Exception("Tiền lương không thể âm!!");
		this.salary = salary;
	}
	
	public Employee(String employeeID, String firstName, String lastName, String sex, int ages, double salary) {
		super();
		this.employeeID = employeeID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.sex = sex;
		this.ages = ages;
		this.salary = salary;
	}
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Employee(String employeeID) {
		this.employeeID = employeeID;
	}
	
	
	
	@Override
	public int hashCode() {
		return Objects.hash(employeeID);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Employee other = (Employee) obj;
		return Objects.equals(employeeID, other.employeeID);
	}
	@Override
	public String toString() {
		return "Employee{" + 
				"employeeID='" + employeeID + '\'' +
				", firstName='" + firstName + '\'' + 
				", lastName='" + lastName + '\'' +
				", sex=" + sex + '\'' +
				", ages=" + ages + 
				", salary=" + salary + 
				"}";
	}
	
	
}

