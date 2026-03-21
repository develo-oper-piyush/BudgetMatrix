import React from "react";

const Card = (props) => {
    return (
        <div
            className={`p-4 ring-1 shadow-lg hover:ring-emerald-400 hover:shadow-violet-400 bg-amber-300 rounded-md transition-all duration-200 ease-in-out flex flex-col items-center justify-center font-gilroy-md ${props.className}`}
        >
            <div
                className={`${props.size} overflow-hidden rounded-full ring-1 ring-slate-900 group relative flex-none cursor-pointer`}
            >
                <img
                    src={`${props.img}`}
                    className="select-none w-full h-full object-covers"
                    alt=""
                />
                <div
                    className="blurred-layer absolute bottom-0 w-full h-full bg-cover bg-bottom blur-[10px] z-10 transition-opacity duration-500 ease-in-out opacity-35 group-hover:opacity-0 pointer-events-none"
                    style={{ backgroundImage: `url(${props.img})` }}
                ></div>
            </div>
            <p className="font-bold">{props.desc}</p>
            <p className="">{props.content}</p>
        </div>
    );
};

export default Card;
