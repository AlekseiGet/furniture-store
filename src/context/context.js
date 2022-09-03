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

export const EntranceContext = createContext(null);


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
      {image: hall2, text: "Мебель в прихожую", price: "1 000 руб."},
      {image: sofa2, text: "Мягкая мебель", price: "1 000 руб."},
      {image: kids, text: "Для детей", price: "1 000 руб."},
      {image: matrases, text: "Матрасы", price: "1 000 руб."},
      {image: offise2, text: "Офисная мебель", price: "1 000 руб."},
      {image: tabl, text: "Столы", price: "1 000 руб."},
      {image: wardrobe, text: "Шкафы купе", price: "1 000 руб."},
      {image: wardrobe2, text: "Шкафы", price: "1 000 руб."},

])

export const FurnityreBodySale = createContext([
      {
       title: "1 руб.",
       image: "https://sun9-60.userapi.com/impg/TIIR5lwnNhMBTmy4zLrDIk_YQz0HZ2VlkvvgBw/3-o4l2odufM.jpg?size=780x1040&quality=96&sign=9a77b690ee0438d4074c50cfc895f972&c_uniq_tag=3oFskkDRcWywmB4gk-yAZKidWCxrOrZHqAwocSTsvko&type=album",
       alt: "стол",
       detail: {
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       }, 
       price: "5 000 руб.",
       key: 1
      },
      {
       title: "1 руб.",
       image: "https://sun9-22.userapi.com/impg/N5qLDWFPfjLBtkEXROJWtqDIrmeGAPttRM7gHg/E83Ya_7CJYg.jpg?size=810x1080&quality=96&sign=8896760c98e63a0fa73ee61431bae5fc&c_uniq_tag=ROYQcBNUAHaEU7qNcp2eT45kxXIPmQqulGyJVb120yA&type=album",
       alt: "комод",
       detail:{
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       },
       price: "13 300 руб.",
       key: 2
      },
      {
       title: "1 руб.",
       image: "https://sun9-15.userapi.com/s/v1/if2/4xmpkDcUI-FAsLMjj_as13bP220bzzFdKnf_x5UEEwTgGx8EWV3ZUChq5k0JOOyC72kmrkMwXj78i5Q_a0b97Xnj.jpg?size=810x1080&quality=96&type=album",
       alt: "кресло",
       detail:{
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       }, 
       price: "7 560 руб.",
       key: 3
      },
      {
       title: "1 руб.",
       image: "https://sun9-7.userapi.com/impg/ef6q-y4X15Dzw1NJ3MZOWp5gikqfOuoaBW8Q8w/YfylwFaWEEA.jpg?size=810x1080&quality=96&sign=d049e2f37be1b3da64fd8083585e9430&c_uniq_tag=kEYLH_LqcVhn1er63T4x6-4S7J3rwIEVAAKUTQjrY9c&type=album",
       alt: "стол",
       detail:{
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       }, 
       price: "3 100 руб.",
       key: 4
      },
      {
       title: "1 руб.",
       image: "https://sun9-52.userapi.com/s/v1/if2/tid-m_Hk-xb7X-stsG7VkLIU4cY5IKsMSbIFpHRsOIzQXYRfWoh-6b-tP-z-PvIKm5DKAQN2mD58DyCu8ylnWp7q.jpg?size=810x1080&quality=96&type=album",
       alt: "стул",
       detail:{
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       }, 
       price: "2 230 руб.",
       key: 5
      },
      {
       title: "1 руб.",
       image: "https://sun9-85.userapi.com/s/v1/if2/d7sJRbYW56QRT3npDk_P7AWKwPYaSY2eH8c7LGLLFB78zknS6QVrvj2-FZem1k8cq_Xidbrpo5mV28pWU1098TmI.jpg?size=810x1080&quality=96&type=album",
       alt: "стул",
       detail:{
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       }, 
       price: "2 740 руб.",
       key: 6
      },
      {
       title: "1 руб.",
       image: "https://sun9-63.userapi.com/impg/2slpUyqkW1SLqjZlPIqkTrsLRA5NX8f99kyCXQ/v7ofg6b44pk.jpg?size=1280x960&quality=96&sign=365b11ea934dcc42a5d9947c5225d026&c_uniq_tag=PPfzOmr2MrT4mkW-StOikfHFbkYuFspQqkh283VwVHI&type=album",
       alt: "стол",
       detail:{
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       },
       price: "4 100 руб.",
       key: 7
      },
])
