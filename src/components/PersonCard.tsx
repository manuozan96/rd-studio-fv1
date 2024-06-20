import Image from "next/image";
import React from "react";

interface PersonCardProps {
  image: string;
  name: string;
  profession: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ image, name, profession }) => {
  return (
    <div style={{ marginBottom: "56px", marginLeft: "14px", width: "100%" }}>
      <Image
        src={image}
        alt={name}
        width={178}
        height={249}
        style={{ marginBottom: "12px" }}
      />
      <p
        style={{
          fontFamily: "DM Sans",
          fontWeight: "800",
          fontSize: "16px",
          color: "#0A0E0B",
          marginLeft: "10px",
          marginTop: "12px",
        }}
      >
        {name}
        <br />
        {profession}
      </p>
    </div>
  );
};

export default PersonCard;
