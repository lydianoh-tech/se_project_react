function WaethwerApi({ weatherData, setweatherData, handleCardClick, isActiveModal, setIsActiveModal }) {
  return (
    <div className="weather-api">
      <Main
        weatherData={weatherData}
        setweatherData={setweatherData}
        handleCardClick={handleCardClick}
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
      />
    </div>
  );
}