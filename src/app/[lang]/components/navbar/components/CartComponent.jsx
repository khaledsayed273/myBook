"use client"
import React, { memo } from 'react'
import Badge from '@mui/material/Badge';
import { Menu } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

function CartComponent() {
    const isCartEmpty = true
    const totalPrice = 20
    const cartsData = [{id:1}, {id:2}]

    const CartIcon = memo(() => (
        <svg className='text-white' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 5H7L10 22H26"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ));

    CartIcon.displayName = "CartIcon";

    const [anchorElCart, setAnchorElCart] = React.useState(null);
    const open = Boolean(anchorElCart);

    const handleClickCart = (event) => {
        setAnchorElCart(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElCart(null);
    };

    return (
        <div className='me-4 ms-1 flex'>
            {isCartEmpty ? (
                <button aria-label="cartEmpty">
                    <CartIcon />
                </button>
            ) : (
                <div className="flex z-50">
                    <Badge sx={{
                        '& .MuiBadge-badge': {
                            backgroundColor: '#D34053',
                            color: '#fff',
                        },
                    }} badgeContent={cartsData.length}>
                        <button onClick={handleClickCart}
                            aria-label="cartButton"
                            aria-controls={open ? 'cart-menu' : undefined}
                            className="bg-transparent  shadow-none hover:shadow-none p-0.5">
                            <CartIcon />
                        </button>
                    </Badge>
                </div>
            )}
            <Menu
                anchorEl={anchorElCart}
                id="cart-menu"
                open={open}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                className='mt-3'
                sx={{
                    ".MuiPaper-root": {
                        background:  "#050505",
                        boxShadow: "1px 1px 20px 1px #0a0909"

                    }
                }}
            >
                <div className="mt-3 p-2 shadow-lg dark:text-white  shadow-gray-400 dark:shadow-none max-h-[520px] w-[350px]">
                    <div className='max-h-[400px] overflow-auto p-1.5'>
                        {cartsData.map((item) => (
                            <div key={item.id} className="flex border border-gray-500 rounded-xl  items-center  gap-4 p-2 mb-5">
                                <div className='flex flex-1 items-center'>
                                    <Image
                                        width={60}
                                        height={60}
                                        alt="tania andrew"
                                        src={item.thumbnail}
                                    />
                                    <div className="flex w-full ms-2 flex-col gap-1">
                                        <span className="font-semibold">
                                            {item.title}
                                        </span>
                                        <div className="flex mt-2 font-semibold items-center justify-between gap-1 text-sm  ">
                                            <span>QTY : {item.qty}</span>
                                            <span>Total : {item.total}</span>
                                        </div>
                                    </div>
                                </div>
                                <button aria-label="deleteCart" onClick={() => deleteFromCart(item)} className='hover:scale-75 transition-all'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='flex text-base text-gray-700 dark:text-gray-300 font-semibold my-4 justify-between items-center'>
                        <span>
                            Total
                        </span>
                        <span>
                            ${totalPrice}
                        </span>
                    </div>
                    <Link onClick={() => {
                        handleClose()
                    }} className='mb-2 block mx-auto text-center font-semibold hover:opacity-80 border rounded-md py-2 bg-black text-white dark:bg-zinc-700' href={"/cart"}>Check out</Link>
                </div>
            </Menu>
        </div>
    )
}

export default CartComponent
