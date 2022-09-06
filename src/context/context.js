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
   {image: sofa, text: "Мягкая мебель", id: 'sofa'},
   {image: table, text: "Столы", id: "table"}, 
   {image: bedroom, text: "Кровати", id: "bedroom"},
   { image: bedside, text: "Спальни", id: "bedside" },
   { image: chair, text: "Стулья", id: "chair" },
   { image: chest, text: "Комоды", id: "chest" },
   { image: child, text: "Детская мебель", id: "child" },
   { image: closet, text: "Распашные шкафы", id: "closet" },
   { image: cupboard, text: "Шкафы купе", id: "cupboard" },
   { image: hall, text: "Мебель для прихожей", id: "hall" },
   { image: kitchen, text: "Мебель для кухни", id: "kitchen" },
   { image: mattress, text: "Матрасы, наматрасники", id: "mattress" },
   { image: offise, text: "Офисная мебель", id: "offise" },
   { image: room, text: "Гостиные", id: "room" },
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

export const FurnityreItem = createContext([
   {
      title: "sofa",
      image: "https://sun9-18.userapi.com/s/v1/if2/Zz5Qv9mzWxczCBKzI9g9fVg1gRRh11pfI1n_39SRGEVISFKtfKwdK3kjoWG-HAmhOh70xd5VK-DpTIFhYqu1as9S.jpg?size=200x150&quality=96&type=album",
      text: "Осень - это время когда хочется поваляться на диванчике, укрывшись теплым пледом. А в нашем магазине это время расширения ассортимента. Теперь у нас в продаже мягкая мебель. Диваны и диванчики, элегантные и комфортные для гостиной, компактные и удобные для детской комнаты. Мягкие велюровые ткани спокойных оттенков, удобная посадка добавят уюта вашей комнате.",
      id: "s1" ,
      price: "1 000 руб.",
      detail: {
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       }, 
   },
   {
      title: "sofa",
      image: "https://sun9-19.userapi.com/s/v1/if2/pDat7-MKdUqNO6cibhX3J0Z8aI_ceDpWw2LHudx7Eirqwhe7EwcQzOTC4Bi4J9uNkpMUUTo2Nc4n4V4iD2hw1VDL.jpg?size=1280x960&quality=96&type=album",
      text: "Осень - это время когда хочется поваляться на диванчике, укрывшись теплым пледом. А в нашем магазине это время расширения ассортимента. Теперь у нас в продаже мягкая мебель. Диваны и диванчики, элегантные и комфортные для гостиной, компактные и удобные для детской комнаты. Мягкие велюровые ткани спокойных оттенков, удобная посадка добавят уюта вашей комнате.",
      id: "s2",
      price: "2 000 руб.",
      detail: {
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       }, 
   },
   {
      title: "sofa",
      image: "https://sun9-88.userapi.com/s/v1/if2/2hZi_iySM0A1G2wpedzoLN_LbqutLayc0vevpz302Q-EDzWyyxg48RSw9nqpKuZRYneSP80uCb-D_-ak144-2Slq.jpg?size=1280x960&quality=96&type=album",
      text: "Осень - это время когда хочется поваляться на диванчике, укрывшись теплым пледом. А в нашем магазине это время расширения ассортимента. Теперь у нас в продаже мягкая мебель. Диваны и диванчики, элегантные и комфортные для гостиной, компактные и удобные для детской комнаты. Мягкие велюровые ткани спокойных оттенков, удобная посадка добавят уюта вашей комнате.",
      id: "s3",
      price: "3 000 руб.",
      detail: {
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       }, 
   },
   {
      title: "sofa",
      image: "https://sun9-66.userapi.com/s/v1/if2/LcDKkVKam93so-Y45OrTpQ7QhVI9cJ_3K60tpc2Z06RdPZ3us0X6cqnEFN441IO2AvFvisKHd0r2D0vG7YmrMx7U.jpg?size=1280x960&quality=96&type=album",
      text: "Осень - это время когда хочется поваляться на диванчике, укрывшись теплым пледом. А в нашем магазине это время расширения ассортимента. Теперь у нас в продаже мягкая мебель. Диваны и диванчики, элегантные и комфортные для гостиной, компактные и удобные для детской комнаты. Мягкие велюровые ткани спокойных оттенков, удобная посадка добавят уюта вашей комнате.",
      id: "s4",
      price: "4 000 руб.",
      detail: {
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       }, 
   },
   {
      title: "sofa",
      image: "https://sun9-15.userapi.com/s/v1/if2/4xmpkDcUI-FAsLMjj_as13bP220bzzFdKnf_x5UEEwTgGx8EWV3ZUChq5k0JOOyC72kmrkMwXj78i5Q_a0b97Xnj.jpg?size=810x1080&quality=96&type=album",
      text: "Осень - это время когда хочется поваляться на диванчике, укрывшись теплым пледом. А в нашем магазине это время расширения ассортимента. Теперь у нас в продаже мягкая мебель. Диваны и диванчики, элегантные и комфортные для гостиной, компактные и удобные для детской комнаты. Мягкие велюровые ткани спокойных оттенков, удобная посадка добавят уюта вашей комнате.",
      id: "s5",
      price: "5 000 руб.",
      detail: {
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       }, 
   },
   {
      title: "sofa",
      image: "https://sun9-87.userapi.com/s/v1/if2/paFr_li6C-l3mRGHzwUmVBXDgiY67ZcOIXlBjLwVXoW97kfNO5_6ItJpltCgdPyTnjZptzY_wug0t7hBREu0LsrY.jpg?size=810x1080&quality=96&type=album",
      text: "Осень - это время когда хочется поваляться на диванчике, укрывшись теплым пледом. А в нашем магазине это время расширения ассортимента. Теперь у нас в продаже мягкая мебель. Диваны и диванчики, элегантные и комфортные для гостиной, компактные и удобные для детской комнаты. Мягкие велюровые ткани спокойных оттенков, удобная посадка добавят уюта вашей комнате.",
      id: "s6",
      price: "6 000 руб.",
      detail: {
          str1:  "ШхВхГ: 420 х 420 х 400 ",
          str2:  "Корпус: Венге ",
           str3: "Фасад: Дуб Молочный"
       }, 
   },


   {
   
      title: "table",
      image: "https://sun9-50.userapi.com/impg/PIlXApY3OvD9aC9rpstx_aEvuweslp6SFlDcXg/f9totN5l8wM.jpg?size=200x150&quality=96&sign=6b82dedf1f2038ecf28130086122f7b1&c_uniq_tag=-rUA7he8avD6DmYXBRAK6fBD5w3KUrRde4NRL1HyP1o&type=album",
      text: "Столы разные нужны, столы разные важны. Представляем вашему вниманию СТОЛЫ ОБЕДЕННЫЕ. Цельные и раскладные. Столы-книжки и столы-тумбы. Столы с фотопечатью и однотонные. Столы раздвижные и столы-трансформеры. У нас в магазине широкий ассортимент обеденных столов как собственного производства так и производства наших партнеров. Столы из ДСП выполнены в разных цветах и всегда есть в наличии. Возможен самовывоз или доставка в день покупки",
      id: "t1",
      price: "1 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "table",
      image: "https://sun9-18.userapi.com/impg/cu_WFI3N_numBjQij5-S0fDdmHwluLwbgA4-DQ/-p_6f91Ze6I.jpg?size=1280x960&quality=96&sign=fbaf8795414fb88cff5e9aa946a5ee22&c_uniq_tag=qLSvjnFh_vsXLzbyRgfSps1KJaZA7hpkUFa_sWB4d-c&type=album",
      text: "Столы разные нужны, столы разные важны. Представляем вашему вниманию СТОЛЫ ОБЕДЕННЫЕ. Цельные и раскладные. Столы-книжки и столы-тумбы. Столы с фотопечатью и однотонные. Столы раздвижные и столы-трансформеры. У нас в магазине широкий ассортимент обеденных столов как собственного производства так и производства наших партнеров. Столы из ДСП выполнены в разных цветах и всегда есть в наличии. Возможен самовывоз или доставка в день покупки",
      id: "t2",
      price: "2 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "table",
      image: "https://sun9-37.userapi.com/impg/zPB3RloesvY5iA66gOUZLOPygUdQ0CWiqeivrg/o7oGShx1dNI.jpg?size=1280x960&quality=96&sign=07cf256edde44829c93eae0d3d32c000&c_uniq_tag=S3Q5oJ9_VhCZ7m77HifZJ9yWXq-46VaqmV_hpxc-9dk&type=album",
      text: "Столы разные нужны, столы разные важны. Представляем вашему вниманию СТОЛЫ ОБЕДЕННЫЕ. Цельные и раскладные. Столы-книжки и столы-тумбы. Столы с фотопечатью и однотонные. Столы раздвижные и столы-трансформеры. У нас в магазине широкий ассортимент обеденных столов как собственного производства так и производства наших партнеров. Столы из ДСП выполнены в разных цветах и всегда есть в наличии. Возможен самовывоз или доставка в день покупки",
      id: "t3",
      price: "3 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "table",
      image: "https://sun9-16.userapi.com/impg/5Z5mqPz3CMM_24H8l49WSHGpSYpF_RFnTXiuSw/0WbtSP9D2fE.jpg?size=1280x960&quality=96&sign=5f736f6b030b5aff5790b31f01282b26&c_uniq_tag=gCJQWEQpuTT6N0hZ_Ed3r57AMmlu8sVXRFQbMpxBcPs&type=album",
      text: "Столы разные нужны, столы разные важны. Представляем вашему вниманию СТОЛЫ ОБЕДЕННЫЕ. Цельные и раскладные. Столы-книжки и столы-тумбы. Столы с фотопечатью и однотонные. Столы раздвижные и столы-трансформеры. У нас в магазине широкий ассортимент обеденных столов как собственного производства так и производства наших партнеров. Столы из ДСП выполнены в разных цветах и всегда есть в наличии. Возможен самовывоз или доставка в день покупки",
      id: "t4",
      price: "4 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "table",
      image: "https://sun9-27.userapi.com/impg/UTFpGDxrzoNK2zptQaAq72v5Hdrk4kzJQeCSgA/ZAHmv5lqU0o.jpg?size=1280x960&quality=96&sign=088c270a012f1a4ecf0d5872efd60c0e&c_uniq_tag=NBIDVuiaSgxfhDyvm4zl_CKcqjNdkQW3zjNXpZdj4eM&type=album",
      text: "Столы разные нужны, столы разные важны. Представляем вашему вниманию СТОЛЫ ОБЕДЕННЫЕ. Цельные и раскладные. Столы-книжки и столы-тумбы. Столы с фотопечатью и однотонные. Столы раздвижные и столы-трансформеры. У нас в магазине широкий ассортимент обеденных столов как собственного производства так и производства наших партнеров. Столы из ДСП выполнены в разных цветах и всегда есть в наличии. Возможен самовывоз или доставка в день покупки",
      id: "t5",
      price: "5 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "table",
      image: "https://sun9-32.userapi.com/impg/x1PoX_INp4lBrV3qTd5C6vbapeue-HhewpmIlQ/iyyk1hFZ1Zo.jpg?size=810x1080&quality=96&sign=13cd359ffa0e74f319f6fc702c219291&c_uniq_tag=HdltSliDe1atoHbaHVcjcPzDMpJQmaQA2xWmVP7j568&type=album",
      text: "Столы разные нужны, столы разные важны. Представляем вашему вниманию СТОЛЫ ОБЕДЕННЫЕ. Цельные и раскладные. Столы-книжки и столы-тумбы. Столы с фотопечатью и однотонные. Столы раздвижные и столы-трансформеры. У нас в магазине широкий ассортимент обеденных столов как собственного производства так и производства наших партнеров. Столы из ДСП выполнены в разных цветах и всегда есть в наличии. Возможен самовывоз или доставка в день покупки",
      id: "t6",
      price: "6 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "table",
      image: "https://sun9-57.userapi.com/impg/yNbruqsefX4haS4i3113IHLGsNDiPjzWLAKh8Q/tOCkrec3SN4.jpg?size=1280x960&quality=96&sign=9a83eb7b6c5e482f48bc01613cf15353&c_uniq_tag=ARBewHxgXSWQ5mfb0zqNVdGG4qOGiLPXlDjDYSeynIY&type=album",
      text: "Столы разные нужны, столы разные важны. Представляем вашему вниманию СТОЛЫ ОБЕДЕННЫЕ. Цельные и раскладные. Столы-книжки и столы-тумбы. Столы с фотопечатью и однотонные. Столы раздвижные и столы-трансформеры. У нас в магазине широкий ассортимент обеденных столов как собственного производства так и производства наших партнеров. Столы из ДСП выполнены в разных цветах и всегда есть в наличии. Возможен самовывоз или доставка в день покупки",
      id: "t7",
      price: "7 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "table",
      image: "https://sun9-54.userapi.com/impg/wPERiO7nT-4igKKoqd_Z2aedOjpkBKyi7SIWNg/z7-rbl-DXt4.jpg?size=1280x960&quality=96&sign=5d9e6cfc91560addd5434e2ce1942728&c_uniq_tag=62MApZfMohovAL8xlZLiCVYJsPy7Ezg1H9N_Z2sf-x4&type=album",
      text: "Столы разные нужны, столы разные важны. Представляем вашему вниманию СТОЛЫ ОБЕДЕННЫЕ. Цельные и раскладные. Столы-книжки и столы-тумбы. Столы с фотопечатью и однотонные. Столы раздвижные и столы-трансформеры. У нас в магазине широкий ассортимент обеденных столов как собственного производства так и производства наших партнеров. Столы из ДСП выполнены в разных цветах и всегда есть в наличии. Возможен самовывоз или доставка в день покупки",
      id: "t8",
      price: "8 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "table",
      image: "https://sun9-63.userapi.com/impg/2slpUyqkW1SLqjZlPIqkTrsLRA5NX8f99kyCXQ/v7ofg6b44pk.jpg?size=1280x960&quality=96&sign=365b11ea934dcc42a5d9947c5225d026&c_uniq_tag=PPfzOmr2MrT4mkW-StOikfHFbkYuFspQqkh283VwVHI&type=album",
      text: "Столы разные нужны, столы разные важны. Представляем вашему вниманию СТОЛЫ ОБЕДЕННЫЕ. Цельные и раскладные. Столы-книжки и столы-тумбы. Столы с фотопечатью и однотонные. Столы раздвижные и столы-трансформеры. У нас в магазине широкий ассортимент обеденных столов как собственного производства так и производства наших партнеров. Столы из ДСП выполнены в разных цветах и всегда есть в наличии. Возможен самовывоз или доставка в день покупки",
      id: "t9",
      price: "9 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "table",
      image: "https://sun9-60.userapi.com/impg/TIIR5lwnNhMBTmy4zLrDIk_YQz0HZ2VlkvvgBw/3-o4l2odufM.jpg?size=780x1040&quality=96&sign=9a77b690ee0438d4074c50cfc895f972&c_uniq_tag=3oFskkDRcWywmB4gk-yAZKidWCxrOrZHqAwocSTsvko&type=album",
      text: "Столы разные нужны, столы разные важны. Представляем вашему вниманию СТОЛЫ ОБЕДЕННЫЕ. Цельные и раскладные. Столы-книжки и столы-тумбы. Столы с фотопечатью и однотонные. Столы раздвижные и столы-трансформеры. У нас в магазине широкий ассортимент обеденных столов как собственного производства так и производства наших партнеров. Столы из ДСП выполнены в разных цветах и всегда есть в наличии. Возможен самовывоз или доставка в день покупки",
      id: "t10",
      price: "10 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
 


   {
      title: "bedroom",
      image: "https://www.namatrase.ru/_src/Catalog.Item/1102_images/877199771/krovat-s-zakrovatnim-modulem-barselona-3.jpg",
      text: "Кровать односпальная с шухлядами Л3 BMS –простая и удобная модель для Вашего ребенка. Классическая форма с изголовьем и ортопедическим основанием позволит юному исследователю мира хорошо высыпаться и получать запас новых сил каждое утро.",
      id: "b1",
      price: "1 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "bedroom",
      image: "https://divany-akkordeon.ru/image/data/product/24173/krovat_stefan_160h200__24173.jpg",
      text: "Кровать односпальная с шухлядами Л3 BMS –простая и удобная модель для Вашего ребенка. Классическая форма с изголовьем и ортопедическим основанием позволит юному исследователю мира хорошо высыпаться и получать запас новых сил каждое утро.",
      id: "b2",
      price: "2 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "bedroom",
      image: "https://korolev.mnogosna.ru/images/products/product_img_5091.jpg",
      text: "Кровать односпальная с шухлядами Л3 BMS –простая и удобная модель для Вашего ребенка. Классическая форма с изголовьем и ортопедическим основанием позволит юному исследователю мира хорошо высыпаться и получать запас новых сил каждое утро.",
      id: "b3",
      price: "3 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "bedroom",
      image: "https://spektr-plus-71.ru/image/cache/catalog/product1/9452-auto_width_1000.jpg",
      text: "Кровать односпальная с шухлядами Л3 BMS –простая и удобная модель для Вашего ребенка. Классическая форма с изголовьем и ортопедическим основанием позволит юному исследователю мира хорошо высыпаться и получать запас новых сил каждое утро.",
      id: "b4",
      price: "4 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "bedroom",
      image: "https://www.mebelbspb.ru/images/tovar/foto27464.jpg",
      text: "Кровать односпальная с шухлядами Л3 BMS –простая и удобная модель для Вашего ребенка. Классическая форма с изголовьем и ортопедическим основанием позволит юному исследователю мира хорошо высыпаться и получать запас новых сил каждое утро.",
      id: "b5",
      price: "5 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "bedroom",
      image: "https://megasalon.ru/upload/iblock/4de/yey29wuwhm8hmrr91d880l6agujiuk2b.jpg",
      text: "Кровать односпальная с шухлядами Л3 BMS –простая и удобная модель для Вашего ребенка. Классическая форма с изголовьем и ортопедическим основанием позволит юному исследователю мира хорошо высыпаться и получать запас новых сил каждое утро.",
      id: "b6",
      price: "6 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "bedroom",
      image: "https://www.bestmebelshop.ru/upload/resize_cache/iblock/d5b/1200_600_0/d5b282ce6b0c69fcf673ab40eb22004c.jpg",
      text: "Кровать односпальная с шухлядами Л3 BMS –простая и удобная модель для Вашего ребенка. Классическая форма с изголовьем и ортопедическим основанием позволит юному исследователю мира хорошо высыпаться и получать запас новых сил каждое утро.",
      id: "b7",
      price: "7 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
  

   {
      title: "chair",
      image: "https://sun9-60.userapi.com/s/v1/if2/aW76BU_fRs2HBcy_AtOnqOws9XeRYh-hHQT8uXDdf6vaVCOKAv0yJkj9rbOe7TyVgnhwzsWiKx42o1BsgDabSzZx.jpg?size=200x267&quality=96&type=album",
      text: "У нас в магазине снова появились деревянные стулья с мягким сиденьем. Основа стула - массив бука. Вы можете приобрести имеющиеся в наличии стулья, а также заказать понравившуюся модель в другом цвете. Также возможен выбор ткани на сидение.",
      id: "с1",
      price: "1 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "chair",
      image: "https://sun9-85.userapi.com/s/v1/if2/d7sJRbYW56QRT3npDk_P7AWKwPYaSY2eH8c7LGLLFB78zknS6QVrvj2-FZem1k8cq_Xidbrpo5mV28pWU1098TmI.jpg?size=810x1080&quality=96&type=album",
      text: "У нас в магазине снова появились деревянные стулья с мягким сиденьем. Основа стула - массив бука. Вы можете приобрести имеющиеся в наличии стулья, а также заказать понравившуюся модель в другом цвете. Также возможен выбор ткани на сидение.",
      id: "с2",
      price: "2 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "chair",
      image: "https://sun9-6.userapi.com/s/v1/if2/Bc8JxDGme8UIA4jPHU3eGPS4_f2XyAh1RgigqM5PWUw5esIbQoaQVYn0IL1Hlb8L2GCQT2QV40ZzVDPsH5JirneQ.jpg?size=810x1080&quality=96&type=album",
      text: "У нас в магазине снова появились деревянные стулья с мягким сиденьем. Основа стула - массив бука. Вы можете приобрести имеющиеся в наличии стулья, а также заказать понравившуюся модель в другом цвете. Также возможен выбор ткани на сидение.",
      id: "с3",
      price: "3 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "chair",
      image: "https://sun9-52.userapi.com/s/v1/if2/tid-m_Hk-xb7X-stsG7VkLIU4cY5IKsMSbIFpHRsOIzQXYRfWoh-6b-tP-z-PvIKm5DKAQN2mD58DyCu8ylnWp7q.jpg?size=810x1080&quality=96&type=album",
      text: "У нас в магазине снова появились деревянные стулья с мягким сиденьем. Основа стула - массив бука. Вы можете приобрести имеющиеся в наличии стулья, а также заказать понравившуюся модель в другом цвете. Также возможен выбор ткани на сидение.",
      id: "с4",
      price: "4 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },


   {
      title: "chest",
      image: "https://sun9-44.userapi.com/impg/_NWcD_--lxiYg-d9RNxp4TDf8dyqVTFB2wCGBg/Zot8SZzFWX8.jpg?size=200x267&quality=96&sign=fed1b65d57fbb7f91e9ff62292d34ce6&c_uniq_tag=QK7aGm1AUyCSt6UoT8TC9_G4z8Xg9jWZpzmx__JmtQU&type=album",
      text: "Возможно именно вам нужен небольшой практичный комод в классическом исполнении. Он может оказаться у Вас дома сразу же в день покупки. Вы можете оформить доставку, либо забрать самовывозом из магазина. Также мы можем изготовить эту модель в другом цвете.",
      id: "сh1",
      price: "1 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "chest",
      image: "https://sun9-33.userapi.com/impg/juUkNQM27-D-DIWzGYujCTaWiCsgJkZMAqzeiQ/_m1jWV95Yd8.jpg?size=810x1080&quality=96&sign=59e7a4f41203e1eeaf1d7a775e0777db&c_uniq_tag=HNJ-T3ke6g_dkWkqIrqNgTlYw75iZ4EQqytJILAnHSw&type=album",
      text: "Возможно именно вам нужен небольшой практичный комод в классическом исполнении. Он может оказаться у Вас дома сразу же в день покупки. Вы можете оформить доставку, либо забрать самовывозом из магазина. Также мы можем изготовить эту модель в другом цвете.",
      id: "сh2",
      price: "2 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "chest",
      image: "",
      text: "Возможно именно вам нужен небольшой практичный комод в классическом исполнении. Он может оказаться у Вас дома сразу же в день покупки. Вы можете оформить доставку, либо забрать самовывозом из магазина. Также мы можем изготовить эту модель в другом цвете.",
      id: "сh3",
      price: "3 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "chest",
      image: "https://sun9-30.userapi.com/impg/VWhzpcFtWKTYpCIBCtXWS6LFyDpIccPWcZsh7w/MNpaE7yYZi8.jpg?size=810x1080&quality=96&sign=bfd00d2f63b8743af9a455d9d1cdfe3b&c_uniq_tag=l0Esab8kvCP1i5lKCCBs485eS2TQ1dU6giWKg8Q6sKk&type=album",
      text: "Возможно именно вам нужен небольшой практичный комод в классическом исполнении. Он может оказаться у Вас дома сразу же в день покупки. Вы можете оформить доставку, либо забрать самовывозом из магазина. Также мы можем изготовить эту модель в другом цвете.",
      id: "сh4",
      price: "4 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "chest",
      image: "https://320601.selcdn.ru/netangels/iblock/b7f/507649f8836a629f87c19329caea4e65.jpg",
      text: "Возможно именно вам нужен небольшой практичный комод в классическом исполнении. Он может оказаться у Вас дома сразу же в день покупки. Вы можете оформить доставку, либо забрать самовывозом из магазина. Также мы можем изготовить эту модель в другом цвете.",
      id: "сh5",
      price: "5 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
   {
      title: "chest",
      image: "https://fabrika-stil.ru/_upload/models/site/big/Komod_Lider_0.4/Komod_Lider_0.41453455444.jpg",
      text: "Возможно именно вам нужен небольшой практичный комод в классическом исполнении. Он может оказаться у Вас дома сразу же в день покупки. Вы можете оформить доставку, либо забрать самовывозом из магазина. Также мы можем изготовить эту модель в другом цвете.",
      id: "сh6",
      price: "6 000 руб.",
      detail: {
         str1: "ШхВхГ: 420 х 420 х 400 ",
         str2: "Корпус: Венге ",
         str3: "Фасад: Дуб Молочный"
      },
   },
])

