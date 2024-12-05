package net.javaguides.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
public class DepartmentDto {
    private Long id;
    private String departmentName;
    private String departmentDescription;
	public DepartmentDto(Long id, String departmentName, String departmentDescription) {
		this.id=id;
		this.departmentName=departmentName;
		this.departmentDescription=departmentDescription;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public String getDepartmentDescription() {
		return departmentDescription;
	}
	public void setDepartmentDescription(String departmentDescription) {
		this.departmentDescription = departmentDescription;
	}
    
}
