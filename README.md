# 🌤️ Angular Weather App

A simple Weather Application built with **Angular** and **Bootstrap 5** to practice core Angular concepts and build an interactive user experience.

## 🚀 Features

- **Weather Dashboard:** Display the current temperature.
- **Temperature Conversion:** Convert temperatures between Fahrenheit and Celsius using a custom Angular Pipe.
- **Toggle Temperature Unit:** Switch between Celsius and Fahrenheit.
- **Dynamic Background Colors:** Change the weather card background based on temperature using a custom directive.
- **Weather List:** Display a list of cities and their temperatures.
- **Filtering:** Search for cities by name.
- **Sorting:** Sort cities by temperature or alphabetically by city name.
- **Angular Routing:** Navigate between Weather and Weather List pages.
- **Query Parameters:** Pass temperature values between routes using Angular Router.

## 🛠️ Technologies Used

- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap 5
- Angular Router
- Angular Pipes
- Angular Directives
- Angular Forms

## 📚 Angular Concepts Practiced

| Concept | Implementation |
|---|---|
| Components | WeatherComponent, WeatherListComponent |
| Custom Pipes | TemperatureConversionPipe |
| Custom Directives | BackgroundColorDirective |
| Routing | Navigate between application pages |
| Query Parameters | Pass temperature through URL |
| Two-Way Binding | `[(ngModel)]` |
| Event Binding | `(click)` |
| Property Binding | `[appBackgroundColor]` |
| Control Flow | `@for` |
| Array Methods | `filter()`, `sort()` |
| Lifecycle Hooks | `ngOnInit()` |

## 📂 Project Structure

```text
src/
└── app/
    ├── Components/
    │   ├── weather/
    │   │   ├── weather.component.ts
    │   │   ├── weather.component.html
    │   │   └── weather.component.css
    │   └── weather-list/
    │       ├── weather-list.component.ts
    │       ├── weather-list.component.html
    │       └── weather-list.component.css
    ├── Directives/
    │   └── background-color.directive.ts
    └── pipes/
        └── temperature-conversion-pipe.ts
```

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

2. Navigate to the project directory:

```bash
cd weather-app
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
ng serve
```

5. Open your browser:

```text
http://localhost:4200
```

## 🎯 Project Goal

The main goal of this project is to practice Angular fundamentals, understand component interaction, work with routing and query parameters, and build reusable custom pipes and directives.

---

**Developed as part of my Angular learning journey.**
