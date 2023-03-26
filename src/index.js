const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing homepage")},
        { path: "/finances", view: () => console.log("Viewing finances")},
        { path: "/incomes-outcomes", view: () => console.log("Viewing incomes/outcomes")},
        { path: "/savings", view: () => console.log("Viewing savings")},
        { path: "/analysis-bilance", view: () => console.log("Viewing analysis/bilance")},
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname ===  route.path
        }
    })
}