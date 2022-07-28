
            let latitude = '43.237376'
            let longitude = '76.8638976'

            let url = `http://api.openweathermap.org/geo/1.0/reverse?limit=1&appid=${props.apiToken}&lat=${latitude}&lon=${longitude}`
            axios.get(url).then(response => {
                setCity(response.data[0]['name'])
                setCountry(countries.resolveName(response.data[0]['country']))
                setDateTime()
            });