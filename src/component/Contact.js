import React from "react";

const Contact = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "skyblue" }}>
      <div className="row">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div id='baba'
            style={{
              hight: "75%",
              width: "33%",
              margin: 15,
              backgroundColor: "#EEF0F2",
              borderRadius: "10px",
              border: "1px solid black",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 15,
              }}
            >
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjknb9HwLna8rrWGJMf9unNSLeb0Zgm1CTA&usqp=CAU"   />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 15,
              }}
            >
              <input
                type="text"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  border: "1px solid black",
                  padding: "5px",
                }}
                placeholder="  Name"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 15,
              }}
            >
              <input
                type="text"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  border: "1px solid black",
                  padding: "5px",
                }}
                placeholder="  Phone Number"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 15,
              }}
            >
              <input
                type="text"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  border: "1px solid black",
                  padding: "5px",
                }}
                placeholder="  Email"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 15,
              }}
            >
              <input
                type="S"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  border: "1px solid black",
                  padding: "5px",
                }}
                placeholder="  Password"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 15,
              }}
            >
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
