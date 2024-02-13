
    const heading =React.createElement("h1",{},"This is rendered from React");
    // console.log(heading)
    const root=ReactDOM.createRoot(document.getElementById("root"));
    console.log(heading)
    root.render(heading)

/*
    Create Element is a react element which is an normal JS object
    React DOM convert the value in normal html and put that inside the root file
    we call a react a library because react can be applied in a smaller portion in project without any problem
    CDN- content delivery network it a network where packages are store and we retrive that data using a link
*/