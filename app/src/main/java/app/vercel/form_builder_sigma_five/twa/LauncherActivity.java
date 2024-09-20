package app.vercel.form_builder_sigma_five.twa;

import android.content.pm.ActivityInfo;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;

public class LauncherActivity extends com.google.androidbrowserhelper.trusted.LauncherActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (Build.VERSION.SDK_INT > Build.VERSION_CODES.O) {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_USER_PORTRAIT);
        } else {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED);
        }
    }

    @Override
    protected Uri getLaunchingUrl() {
        Uri uri = super.getLaunchingUrl();
        String adId = "";

        try {
            // Get the Advertising ID
            AdvertisingIdClient.Info adInfo = AdvertisingIdClient.getAdvertisingIdInfo(this);
            adId = adInfo.getId();
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Append the Advertising ID to the URI
        if (adId != null && !adId.isEmpty()) {
            uri = uri.buildUpon()
                    .appendQueryParameter("gaid", adId)
                    .build();
        }

        return uri;
    }
}
