import React from 'react';

const Message = () => {
    return (
        <div className='message'>
            <h2>Мебель от производителя, с заботой о каждом!</h2>  
            <span className='message_text'>Хотите обновить дизайн своей квартиры в соответствии с последними модными тенденциями, и при этом не переплачивать? Тогда мы рады приветствовать вас в нашем онлайн-гипермаркете! Широчайший выбор, предоставленный в нашем каталоге, позволит купить мебель в Ростове-на-Дону быстро и без переплат, воплотив при этом свои самые заветные мечты и идеи в плане обустройства своей квартиры в жизнь. Практичная, надежная и современная мебель эконом-класса – отличное решение для каждого!</span>
            <ul className='message_list'>Почему следует покупать именно у нас:
                <li>самые доступные цены в городе;</li>
                <li>большой выбор идей, материалов, фурнитур и цветовых вариаций;</li>
                <li>бесплатные консультации специалистов;</li>
                <li>на весь ассортимент есть гарантия от производителя.</li>
                <li>все товары в каталоге произведены исключительно отечественными фабриками;</li>
            </ul>
        </div>
    );
};

export default Message;