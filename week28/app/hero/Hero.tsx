'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden flex-col min-h-screen pt-[12vh]">
        <div className="relative z-10 flex flex-col items-center">
            <Image 
                src="/images/lion.png" 
                alt="heroimage"
                width={150}
                height={150}
            />
            <h1 className="mt-6 text-2xl font-bold tracking-wide text-center sm:text-4xl md:text-5xl lg:text-6xl"> 
                멋쟁이사자처럼 중앙대학교 13기<br/>
                <span>아기 사자</span>입니다.
            </h1>
            <h2 className="flex items-center px-2 mt-5 text-sm font-medium text-center sm:text-2xl">
                안녕하세요. 저는
                <span className="font-bold text-yellow-500">
                    <Typewriter options={{
                        strings :[
                        '코딩하다 졸린',
                        '세상에서 제일 무서운',
                        '공부하다가 포효한',
                        '404 페이지에서 길 잃은',
                        '아이디어가 넘치는',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                        wrapperClassName: 'pl-2',
                    }}
                    />
                </span> 사자입니다.
            </h2>
            <Link
                href="/projects"
                className="flex items-center px-10 py-4 mt-6 text-lg font-medium text-white transition-all duration-300 bg-gray-600 rounded-full cursor-pointer hover:bg-black"
            >
                <span>작업물 확인하러가기</span>
                <BsArrowRight className="inline-block w-5 h-5 ml-2" />
            </Link>
        </div>
    </div>
  );
};

export default Hero