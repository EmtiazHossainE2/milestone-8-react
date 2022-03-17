import React from 'react';
import './App.css'
import Article from './components/Article/Article';
import Blog from './components/Blog/Blog';

/* 
    ১. তুমি create react app দিয়ে রিএক্ট এর প্রজেক্ট বানাতে পারো কিনা  
    ২. JSX দিয়ে একটা div এর মধ্যে article ট্যাগ দিয়ে একটা ছোট ব্লগ টাইপের কিছু লিখতে পারো কিনা 
    ৩. তুমি css ক্লাস লিখবে যেটার নাম হবে blog তারপর তোমার JSX এর মধ্যে গিয়ে article ট্যাগ এর মধ্যে blog ক্লাস যোগ করবে। 

    ৪. তুমি জাভাস্ক্রিপ্ট অবজেক্ট দিয়ে স্টাইল article ট্যাগ এর মধ্যে একটা h2 এর মধ্যে কিছু স্টাইল দাও। মিনিমাম ৩টা স্টাইল দিব। 

    ৫. article ট্যাগ এর মধ্যে একটা প্যারাগ্রাফ ট্যাগ যোগ করো। তারপর inline স্টাইল সেখানে যোগ করো। 

    ৬. ব্লগ নামক একটা কম্পোনেন্ট বানাও

    ৭. সেই ব্লগ কম্পোনেন্ট দিয়ে মিনিমাম তিনটা কম্পোনেন্ট বানাবে। 

    ৮. প্রত্যেকটা কম্পোনেন্ট এ heading এবং author নামে দুইটা প্রপার্টি সেন্ড করবে। এবং সেই প্রপার্টিগুলো দেখাবে। 



 */
const App = () => {
    return (
        <div >
            <h2 className='text-center my-4'>React Vision Day </h2>
            <Article></Article>
            <br />
            <Blog></Blog>
        </div>
    );
};

export default App;