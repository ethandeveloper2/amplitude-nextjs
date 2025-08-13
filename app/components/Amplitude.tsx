'use client';
import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';

const Amplitude = () => {
    useEffect(() => {
        amplitude.add(sessionReplayPlugin());
        amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY || '', {
            autocapture: {
                attribution: true,
                fileDownloads: true,
                formInteractions: true,
                pageViews: true,
                sessions: true,
                elementInteractions: true,
                networkTracking: true,
                webVitals: true,
                frustrationInteractions: true,
            },
        });

        amplitude.setUserId('test-user-123');
        amplitude.track('Quickstart Event', { plan: 'free', from: 'quickstart' });
    }, []); // 빈 의존성 배열로 한 번만 실행

    return <></>;
};

export default Amplitude;
