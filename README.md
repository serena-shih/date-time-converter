# date-time-converter

Blueprint 22 - Time and Calendar Converter

A single destination for time zone and calendar type conversions




Extra feature for auto-selecting current date:
<!--Pre-select your date to current date-->
    <script>
        let today = new Date();
        let d = String(today.getDate());
        let m = String(today.getMonth()+1);
        let y = String(today.getFullYear());

        document.getElementById('date').selectedIndex = d-1;
        document.getElementById('month').selectedIndex = m-1;
        document.getElementById('year').selectedIndex = y-1950;
    </script>