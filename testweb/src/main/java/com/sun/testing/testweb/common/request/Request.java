package com.sun.testing.testweb.common.request;

import java.io.Serializable;

public class Request implements Serializable {

	private static final long serialVersionUID = -7940423319041656374L;

	private String id;
	
	private String fieldID;
	
	private String value;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFieldID() {
		return fieldID;
	}

	public void setFieldID(String fieldID) {
		this.fieldID = fieldID;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	
}
