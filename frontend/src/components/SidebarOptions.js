import React from 'react'
import './css/SidebarOptions.css'
import { Add } from "@material-ui/icons";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0mcaTpug-AJu-r2ySeqU10m3Hd12P9Igj-4GjY5gpQ&s"
          alt="img"
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg"
          alt="logo"
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4RF2JYA4kZ4yNg0yHBCGucgg_MoQkUtWbdEmljE&s"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4avLfDOtfyl8bHFMOV5tH3hxBBb3B--qOhUg8w6RwA&s"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H9spNr1pdoZL39k-9WawHN6TflW5y20jwVyr_cc&s"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/premium-vector/modern-science-particle-molecule-element-logo-design-logo-scienceatombiologytechnologyphysicslab_607588-10571.jpg"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCG9Vzre0C4utyN5dWj_kUUR3UJDuDHF7J3SmXpuflxg&s"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThoNDaJK3uTGmLRuCIAa8rc2CqO41evEsbHozxHpY&s"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmmLyGAkBlspqMyDRKynjhCbBnI4tGNo7400YthVo&s"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-vector/education-business-logo-template-branding-design-vector-education-center-text_53876-136247.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
      </div>
  )
}

export default SidebarOptions