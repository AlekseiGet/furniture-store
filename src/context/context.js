import { createContext } from "react"
import sofa from "../img/left_item/sofa-2.svg";
import table from "../../src/img/left_item/table-3.svg";
import bedroom  from "../img/left_item/bedroom-3.svg";
import bedside  from "../img/left_item/bedside-table.svg";
import chair from "../img/left_item/chair.svg";
import chest from "../img/left_item/chest.svg";
import child from "../img/left_item/child-2.svg";
import closet from "../img/left_item/closet-2.svg";
import cupboard from "../img/left_item/cupboard.svg";
import hall from "../img/left_item/hall-4.svg";
import kitchen from "../img/left_item/kitchen-2.svg";
import mattress from "../img/left_item/mattress.svg";
import offise from "../img/left_item/office-3.svg";
import room from "../img/left_item/room-3.svg";

import bad from "../img/body_item/bad.png";
import badroom from "../img/body_item/badroom.png";
import chair2 from "../img/body_item/chair.png";
import chestjpg from "../img/body_item/chestjpg.jpg";
import dainingroom from "../img/body_item/dainingroom.png";
import hall2 from "../img/body_item/hall.png";
import sofa2 from "../img/body_item/i_P4fZIxx3o.png";
import kids from "../img/body_item/kids.png";
import matrases from "../img/body_item/matrases.png";
import offise2 from "../img/body_item/offise.png";
import tabl from "../img/body_item/tabl.png";
import wardrobe from "../img/body_item/wardrobe.png";
import wardrobe2 from "../img/body_item/wardrobe2.png";

export const FurnitureBox = createContext([
   {image: sofa, text: "Мягкая мебель"},
   {image: table, text: "Столы"}, 
   {image: bedroom, text: "Кровати"},
   {image: bedside, text: "Спальни"},
   {image: chair, text: "Стулья"},
   {image: chest, text: "Комоды"},
   {image: child, text: "Детская мебель"},
   {image: closet, text: "Распашные шкафы"},
   {image: cupboard, text: "Шкафы купе"},
   {image: hall, text: "Мебель для прихожей"},
   {image: kitchen, text: "Мебель для кухни"},
   {image: mattress, text: "Матрасы, наматрасники"},
   {image: offise, text: "Офисная мебель"},
   {image: room, text: "Столы"},
])

export const FurnityreBodyIcon = createContext([
      {image: bad, text: "Кровати", price: "1 000 руб."},
      {image: badroom, text: "Спальни", price: "1 000 руб."},
      {image: chair2 , text: "Стулья", price: "1 000 руб."},
      {image: chestjpg, text: "Комоды", price: "1 000 руб."},
      {image: dainingroom, text: "Мебель для кухни", price: "1 000 руб."},
      {image: hall2, text: "Прихожка", price: "1 000 руб."},
      {image: sofa2, text: "Мягкая мебель", price: "1 000 руб."},
      {image: kids, text: "Для детей", price: "1 000 руб."},
      {image: matrases, text: "Матрасы", price: "1 000 руб."},
      {image: offise2, text: "Офисная мебель", price: "1 000 руб."},
      {image: tabl, text: "Столы", price: "1 000 руб."},
      {image: wardrobe, text: "Шкафы купе", price: "1 000 руб."},
      {image: wardrobe2, text: "Шкафы", price: "1 000 руб."},

])