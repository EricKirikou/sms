import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const SchoolCalendar = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      selectable: true,
      editable: true,
      eventLimit: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        { title: '📚 Exam', start: '2025-02-21', color: '#ff4d4d' },
        { title: '🎉 School Event', start: '2025-02-24', color: '#28a745' },
        { title: '💻 IT Workshop', start: '2025-02-27', color: '#007bff' }
      ],
      dateClick: function (info) {
        const eventTitle = prompt('Enter Event Title:');
        if (eventTitle) {
          calendar.addEvent({
            title: eventTitle,
            start: info.dateStr,
            allDay: true,
            color: '#ff9800'
          });
        }
      },
      eventClick: function (info) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Delete this event?')) {
          info.event.remove();
        }
      }
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div id="calendar" ref={calendarRef}></div>
    </div>
  );
};

export default SchoolCalendar;