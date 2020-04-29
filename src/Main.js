import React from 'react';

const $ = require('jquery');

export function Main() {
    const [list1, setList1] = React.useState([
        "Alizabed fisher",
        "Jonathen Carpenter",
        "Kelly Woth"
    ]);
    const [list2, setList2] = React.useState([
        "Dhananjay Shinde"
    ]);
    const [selected, setSelected] = React.useState("");
    const [button1, setButton1] = React.useState(false);
    const [button2, setButton2] = React.useState(false);
    const handleSelect1 = (e) => {
        setButton1(false);
        setButton2(true);
        var item = e.target.innerHTML;
        setSelected(item);
        $(e.target).toggleClass("selected");
    }
    const handleSelect2 = (e) => {
        setButton2(false)
        setButton1(true);
        var item = e.target.innerHTML;
        setSelected(item);
        $(e.target).toggleClass("selected");
    }
    const handleMove1 = () => {
        setList2([...list2, selected]);
        list1.splice(list1.indexOf(selected), 1);
        const temp = list1;
        setList1(temp);
    }
    const handleMove2 = () => {
        setList1([...list1, selected]);
        list2.splice(list2.indexOf(selected), 1);
        const temp = list2;
        setList2(temp);
    }
    return (
        <div className="container">
            <div>
                <h3 className="text-center pb-5 title">The Best App to Increase Your Productivity</h3>
            </div>
            <div className="row p-2 main-container">
                <div className="col-md-5">
                    <h4 className="text-center mt-2">Group 1</h4>
                    <div className="m-4 pt-4 pr-4 border">
                        <ul className="items">
                            {list1.map((item) => { return (<li className="cust" key={item} onClick={handleSelect1}>{item}</li>) })}
                        </ul>
                        {list1.length === 0 ? <p className="text-center pb-3">Group 1 is empty</p> : <p></p>}
                    </div>
                </div>
                <div className="col-md-2 main-content">
                    <button className="btn btn-primary btn1" onClick={handleMove1} disabled={button1}>move >></button>
                    <button className="btn btn-primary btn2" onClick={handleMove2} disabled={button2}>{"<<"} move</button>
                </div>
                <div className="col-md-5">
                    <h4 className="text-center mt-2">Group 2</h4>
                    <div className="m-4 pt-4 pr-4 border">
                        <ul className="items">
                            {list2.map((item) => { return (<li className="cust" key={item} onClick={handleSelect2} >{item}</li>) })}
                        </ul>
                        {list2.length === 0 ? <p className="text-center pb-3">Group 2 is empty</p> : <p></p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
